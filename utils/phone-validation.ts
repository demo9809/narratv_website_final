
/**
 * Utility functions for phone number validation and sanitization.
 */

// Disallowed: Letters, Emojis, Special characters, Spaces typed manually
export const isAllowedPhoneChar = (char: string): boolean => {
    return /^\d$/.test(char);
};

// On paste: Strip all non-digit characters
export const sanitizePhoneNumber = (value: string): string => {
    return value.replace(/\D/g, '');
};

// Rejection rules:
// - All digits identical (0000000000)
// - Sequential patterns (1234567890, 9876543210)
// - Repeating blocks (1212121212, 5555551234 - wait, 5555551234 is not a simple repeat, but maybe 555555 is?)
// The requirement said: "Repeating blocks Example: 1212121212, 5555551234"
// 5555551234 has "555555" which is a repeating block of '5'.
// 1212121212 has "12" repeating.

export const isValidPhonePattern = (phone: string): boolean => {
    if (!phone) return true; // Empty is handled by required check usually

    // Check for length first (validation rule: Min 8, Max 15)
    if (phone.length < 8 || phone.length > 15) {
        return false;
    }

    // 1. All digits identical
    if (/^(\d)\1+$/.test(phone)) {
        return false;
    }

    // 2. Sequential patterns (Ascending or Descending)
    // We can check if "0123456789" includes the phone number or "9876543210" includes it.
    // But wait, "1234567890" is longer than 8 chars.
    // If phone is "12345678", it's in "0123456789".
    const ascending = "0123456789";
    const descending = "9876543210";
    // We need to handle wrapping? No, usually phones don't wrap 9->0 in sequences like that unless specified.
    // Requirement examples: 1234567890, 9876543210.
    // Let's just check if the string is a substring of a long sequence string?
    // Actually, longer sequences like "0123456789012345"?
    // Let's implement a loop to check adjacent differences.

    let isSequentialAsc = true;
    let isSequentialDesc = true;
    for (let i = 0; i < phone.length - 1; i++) {
        const curr = parseInt(phone[i], 10);
        const next = parseInt(phone[i + 1], 10);
        if (next !== curr + 1) isSequentialAsc = false;
        if (next !== curr - 1) isSequentialDesc = false;
    }
    if (isSequentialAsc || isSequentialDesc) return false;

    // 3. Repeating blocks
    // Example: 1212121212 (Block "12" repeats)
    // Example: 5555551234 (Block "5" repeats 6 times? Or is it just "repeating digits"?)
    // The example '5555551234' is flagged. This looks like "Detect if a significant portion is just repeating digits".
    // But '1212121212' is definitely pattern repetition.
    // Let's try to detect short repetitive patterns that cover the majority of the string.

    // Heuristic:
    // - Consists entirely of a repeating substring?
    // - Or has a very low entropy?
    // The User gave specific examples.
    // "Repeating blocks Example: 1212121212, 5555551234"
    // 5555551234 consists of 6 '5's. That's a lot of repeats.

    // Let's implement a check for:
    // A) Repeating substring of length 2+ that covers the whole string (like 121212...)
    // B) A single digit repeating for >= 6 times? (Like 555555...) - Maybe?

    // Check A:
    // Naive check: Try patterns of length 2 to length/2
    for (let len = 2; len <= phone.length / 2; len++) {
        const pattern = phone.slice(0, len);
        // Construct string from pattern
        const repeats = Math.floor(phone.length / len);
        const remainder = phone.length % len;
        const constructed = pattern.repeat(repeats) + pattern.slice(0, remainder);
        if (constructed === phone) {
            return false; // Entirely made of repeating block
        }
    }

    // Check B: "5555551234"
    // Maybe checking if the same digit appears too many times consecutively?
    // "555555" is 6 times.
    if (/(\d)\1{5,}/.test(phone)) {
        // Matches 6 or more identical consecutive digits
        // 5555551234 matches.
        // 1234555555 matches.
        return false;
    }

    return true;
};
