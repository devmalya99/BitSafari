import React from 'react'

const Pagination = ({page,setPage,totalPages}) => {

    const handleClick = (currentPage) => {
        setPage(currentPage);
        window.scroll(0, 550);
      };
  return (
    <>
        <div className="join flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            className={`join-item btn btn-md  ${
              page === i + 1 ? "btn-active" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Pagination