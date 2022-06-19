
import SortByPrice from './sortByPrice.jsx';
import CategorySelect from './categorySelect.jsx';
import SortByTime from './sortByTime.jsx';


export default function HeaderOptions() {
    return (
        <div className='flex space-x-1 pl-[4%] sm:pl-[5%] md:pl-[14%] lg:pl-52'>

            {/* Left */}
            <SortByPrice />

            <SortByTime />




            {/* Right */}
            <div className="">
            </div>
        </div>
    )
}