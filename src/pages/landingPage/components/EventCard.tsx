import React from 'react';
import { Icon } from '@iconify/react';

// 模拟 CategoryTag 组件
const CategoryTag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
      {name}
    </span>
  );
};

// 模拟 formatTime 函数
const formatTime = (dateString?: string): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  } catch {
    return dateString;
  }
};

interface EventCardProps {
  item: {
    cover?: string;
    ui_tags?: Array<{ value: string; description: string }>;
    event_type: string;
    event_region?: string;
    event_name: string;
    event_name_zh?: string;
    event_summary?: string;
    event_start_date?: string;
    event_end_date?: string;
    confidence_reasoning?: string;
    confidence_score?: number;
  };
  animationDelay?: string;
}

const EventCardItem: React.FC<EventCardProps> = ({ item, animationDelay }) => {
  return (
    <div
      className="h-[100%] bg-white rounded-xl shadow-sm overflow-hidden card-hover animate-fadeInUp cursor-pointer"
      style={{
        animationDelay: animationDelay || undefined,
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover-zoom bg-[#ccc]"
          style={{
            backgroundImage: `url(${item.cover ? item.cover + '/w1024' : ''}),url(/icons/error.png)`,
            backgroundSize: 'cover',
          }}
        ></div>
        {item.ui_tags?.length ? (
          <div className="flex gap-2 absolute left-3 top-3">
            {item.ui_tags.map((tag) => {
              return tag.value === 'New' ? (
                <div className="tooltip" data-tip={tag.description} key={tag.value}>
                  <span
                    className={
                      'bg-amber-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap cursor-help'
                    }
                  >
                    {tag.value}
                  </span>
                </div>
              ) : (
                <div className="tooltip" data-tip={tag.description} key={tag.value}>
                  <span
                    className={
                      'bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap cursor-help'
                    }
                  >
                    {tag.value}
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex gap-2 mb-2 flex-wrap">
            <CategoryTag name={item.event_type} />
            {item.event_region ? (
              <span className="rounded inline-block text-green-700 px-2 py-1 font-medium text-xs bg-green-50">
                {item.event_region}
              </span>
            ) : null}
          </div>
          <h5 className="mt-2 mb-1 text-base font-[500] text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {item.event_name}
          </h5>
          <p className="text-sm text-slate-500 mb-2">
            {item.event_name_zh}
          </p>
          <div className="hidden lg:block">
            <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
              {item.event_summary}
            </p>
          </div>
        </div>
        <div className="border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:calendar" className="w-4 h-4" />
            <div className="flex flex-wrap gap-1">
              <div>{formatTime(item?.event_start_date)}</div>
              {item?.event_end_date ? (
                <div>- {formatTime(item?.event_end_date)}</div>
              ) : null}
            </div>
          </div>
          <div className="tooltip" data-tip={item.confidence_reasoning}>
            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm cursor-help">
              {item.confidence_score === 100 ? (
                <svg
                  className="w-3 h-3 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              )}
              <span className="text-xs font-medium text-gray-700">{item.confidence_score}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardItem;
