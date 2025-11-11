'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { PostMetaData } from './PostMetaData';



interface SeriesTreeTocProps {
    seriesPosts: PostMetaData[]; 
    currentSlug: string;         
    seriesTitle: string;
}

export default function SeriesTreeToc({ seriesPosts, currentSlug, seriesTitle }: SeriesTreeTocProps) {

    const [isExpanded, setIsExpanded] = useState(false);
    
     const currentIndex = seriesPosts.findIndex(post => post.slug === currentSlug);
    const totalCount = seriesPosts.length;
    

    const toggleExpansion = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className={`relative bg-slate-700/50 ${isExpanded? 'rounded-t-md':'rounded-md'} p-4 mb-8`}>
    
            <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={toggleExpansion}
            >
                <h2 className="text-xl font-bold text-white">
                    {seriesTitle}
                </h2>
                <div className="text-sm text-slate-300 font-medium  flex items-center">
                    <span className="mr-3">
                        {currentIndex + 1} / {totalCount}
                    </span>
                    
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

            <div 
                className={`absolute left-0 right-0 z-30 
                            bg-slate-800  rounded-b-md shadow-xl 
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${isExpanded ? 'max-h-screen pt-4 border-t-0' : 'max-h-0'}`
                        }
                style={{ top: '100%'}} // border 겹침 방지를 위한 미세 조정
            >
                <ul className="space-y-2 pt-0 pb-4 px-4"> {/* 내부 패딩 조정 */}
                    {seriesPosts.map((post, index) => (
                        <li key={post.slug}> 
                            <Link 
                                href={`/posts/${post.slug}`}
                                onClick={toggleExpansion} // 클릭 시 드롭다운 닫기
                                className={`block p-2 rounded transition-colors duration-200 
                                    ${post.slug === currentSlug 
                                        ? 'bg-blue-600 text-white font-bold' 
                                        : 'text-slate-200 hover:bg-slate-700' 
                                    }`
                                }
                            >
                                <span className="mr-2 text-sm text-gray-400 dark:text-gray-400">
                                    {index + 1}.
                                </span>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}