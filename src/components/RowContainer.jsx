
const RowContainer = ({ flag }) => {
    return (
        <div className={` w-full my-12 
        ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
            <div className="min-w-450 w-350 h-20 bg-cardOverlay shadow-md backdrop-blur-lg"></div>
        </div>
    )
}

export default RowContainer