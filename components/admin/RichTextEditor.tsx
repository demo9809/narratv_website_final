'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet',
    'color', 'background',
    'link', 'image', 'video'
];

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const [isHtmlMode, setIsHtmlMode] = React.useState(false);

    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {isHtmlMode ? 'HTML Source Code' : 'Visual Editor'}
                </span>
                <button
                    type="button"
                    onClick={() => setIsHtmlMode(!isHtmlMode)}
                    className="text-xs font-bold text-brand-accent hover:text-brand-black transition-colors"
                >
                    {isHtmlMode ? 'Switch to Visual Editor' : 'Edit HTML Source'}
                </button>
            </div>

            {isHtmlMode ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-80 p-4 font-mono text-sm bg-gray-900 text-green-400 focus:outline-none resize-y"
                    placeholder="Enter raw HTML here..."
                />
            ) : (
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={(content, delta, source, editor) => {
                        // Only update parent state on user interaction to prevent infinite loops
                        if (source === 'user') {
                            onChange(content);
                        }
                    }}
                    modules={modules}
                    formats={formats}
                    placeholder={placeholder}
                    className="h-64 mb-12"
                />
            )}
        </div>
    );
}
