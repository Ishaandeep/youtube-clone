export function YoutubeCard() {
  return (
    <div className="grid grid-rows-16 ml-3 w-1/4 ">
      <img
        className="row-span-11 rounded-lg"
        src="/thumbnails/photo1.jpg"
      ></img>
      <div className="row-span-5 flex flex-row mt-1">
        <div className="basis-1/6">
          <img
            className=" rounded-full mt-2"
            src="/thumbnails/channelLogo1.png"
          ></img>
        </div>
        <div className="basis-5/6 ">
          <div className=" grid grid-rows-2 mt-2 ml-2">
            <p className="">
              Why Sell your old luxury car, when you can make if Brand New
              @Brotomotive
            </p>
            <div className=" grid grid-rows-2 text-gray-600 text-sm ">
              <h4>BROTOMOTIVE</h4>
              <h4>1.1K views 5 minutes ago</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
