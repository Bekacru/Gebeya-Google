import Link from 'next/link';
import Image from 'next/image';
import TelegramLogo from '../public/images/tg-logo.svg'
import PaginationButtons from './PaginationButtons';
import { useRouter } from 'next/router';

//price formatting
function numberWithCommas(x) {
    x = Math.trunc(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//long date formatting
function timeSince(date) {
    //chnage python date to javascript date
    date = new Date(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }

    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }

    return interval + ' ' + intervalType;
}
export default function SearchResults({ results, term }) {
    const url = 'http://127.0.0.1:8000'

    return (
        <div className="mx-auto w-full px-3 sm:px-[5%] md:px-[14%] lg:px-52" >
            <p className="text-gray-600 text-md mb-5 mt-3 italic font-serif">{results.total} items found for "{term}"</p>
            <div className="flex w-full flex-wrap flex-grow space-x-3">
                {results.data.map(result => (
                    <div className=''>
                        <div class="py-4">
                            <div class="flex max-w-md bg-white pl-2 shadow rounded-lg overflow-hidden items-center">
                                <div class="w-1/3">
                                    <img src={url + result.image} alt="" className='w-full max-h-fit rounded-sm' />
                                </div>
                                <div class="w-2/3 p-4">
                                    <h1 class="text-gray-900 font-bold text-xl capitalize">{(result.title).substring(0, 20)}</h1>
                                    <div className='flex space-x-1 '>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <p class="text-gray-600 text-sm">{timeSince(result.created_date)} ago</p>
                                    </div>
                                    <div class="flex item-center mt-2 space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                        </svg>
                                        <span className='text-sm'>{result.channelname}</span>
                                    </div>
                                    <p class="mt-2 text-gray-600 text-sm h-10">{(result.description).substring(0, 60)}</p>
                                    <div class="flex item-center justify-between mt-6">
                                        <h1 class="text-gray-700 font-bold text-sm">Br. {numberWithCommas(result.price)}</h1>
                                        <svg className='opacity-70' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.397 17.899l1.019 6.101-7.416-4.554-7.416 4.554 1.48-8.866-6.064-5.828 8.332-1.15 3.668-8.156 3.047 6.773c-1.258 1.186-2.047 2.863-2.047 4.727 0 3.213 2.334 5.875 5.397 6.399zm5.603-6.399c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v1.999l-2 .001v1h2v2h1v-2h2v-1z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <PaginationButtons />
        </div>
    )
}