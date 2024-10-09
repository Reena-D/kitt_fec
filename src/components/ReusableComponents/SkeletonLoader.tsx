


function SkeletonLoader () {
    return (
        <>
        {/* Background skeleton */}
        <div className=" mx-auto space-y-4 mb-4 w-[1200px] h-[150px]">
          <div className="space-y-2 m-3 p-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 m-2">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-200 rounded animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gradient-to-r from-gray-200 rounded animate-pulse w-40" />
                  <div className="h-4 bg-gradient-to-r from-gray-200 rounded animate-pulse w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
    )
  };

  export default SkeletonLoader