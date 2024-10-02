export default function UI() {
  return (
    <>
      <div className="flex items-center m-3 gap-2">
        <div className="border rounded-xl w-max hover:bg-gray-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 m-2 p-1"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
        <h1 className="text-xl text-sky-300 p-2 m-1 shadow-sm shadow-blue-300 rounded-2xl">Chat UI</h1>
      </div>

      {/* Main home body div */}
      <div className="mx-auto p-3 border-zinc-700 ">
        <div className="relative shadow-sm shadow-blue-300 rounded-lg">
          <h3 className="items-center m-2 gap-2 text-4xl text-white p-4 ">
            How may I help you today, Abhay?
          </h3>
        </div>
        <div className="flex items-center gap-2 m-3 p-3">
          <div className="bg-red-200 h-[500px] w-[400px] rounded-3xl relative top-0 right-0 m-2 flex flex-col shadow-red-400 shadow-2xl">
            <div className="align-top justify-between">
              <div className="relative w-full h-min bg-gray-200">
                {/* <!-- SVG 1 - Top Left Corner --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 m-4 w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
                </svg>

                {/* <!-- SVG 2 - Top Right Corner --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 m-4 w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </div>
              {/* Text at the bottom */}
              <div className="p-4 text-4xl text-center align-bottom">
                Chat with AI
              </div>
            </div>
          </div>

          <div className=" h-[500px] w-[500px] rounded-3xl relative top-0 right-0 m-2 flex flex-col">
            {/* 1st */}
            <div className="flex flex-col space-y-4">
              {/* <!-- First Div --> */}
              <div className="p-4 bg-red-400 h-[240px] w-[500px] gap-3 rounded-3xl m-1 relative shadow-lg shadow-red-700">
                {/* Text at the bottom */}
              <div className="text-4xl text-center align-bottom">
                Create AI Image
              </div>
                {/* <!-- SVG 1 - Top Left Corner --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 m-4 w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>

                {/* <!-- SVG 2 - Top Right Corner --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 m-4 w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </div>

              {/* 2nd */}
              <div className="p-4 bg-blue-400 h-[240px] w-[500px] gap-3 rounded-3xl m-1 relative shadow-lg shadow-blue-700">
                {/* Text at the bottom */}
              <div className="text-4xl text-center align-bottom">
                Create AI Video
              </div>
                {/* <!-- SVG 1 - Top Left Corner --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 m-4 w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2ZM17 12.3587L21 15.1587V8.84131L17 11.6413V12.3587ZM3 6V18H15V6H3Z"></path>
                </svg>

                {/* <!-- SVG 2 - Top Right Corner --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 m-4 w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-9 my-4 relative">
          <h1 className="text-3xl text-zinc-200 p-2 relative">Hot Features</h1>
          <div className="flex items-center gap-2 text-slate-200 relative">
            <div className="p-4 bg-slate-500 h-[240px] w-[300px] gap-3 rounded-3xl m-2 relative border-gray-200 border-x-2 shadow-black shadow-xl">
              Smart Work{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative m-4 w-8 h-8"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M7 6C7 6.23676 7.04072 6.46184 7.11469 6.66999C7.22686 6.98559 7.17357 7.33638 6.97276 7.60444C6.77194 7.8725 6.45026 8.02222 6.11585 8.00327C6.0776 8.0011 6.03898 8 6 8C4.89543 8 4 8.89543 4 10C4 10.5129 4.19174 10.9786 4.50903 11.3331C4.84885 11.7128 4.84885 12.2872 4.50903 12.6669C4.19174 13.0214 4 13.4871 4 14C4 14.8842 4.57447 15.6369 5.37327 15.9001C5.84924 16.057 6.1356 16.5419 6.04308 17.0345C6.01489 17.1846 6 17.3401 6 17.5C6 18.8807 7.11929 20 8.5 20C9.75862 20 10.8015 19.069 10.9746 17.8583C10.9806 17.8165 10.9891 17.7756 11 17.7358V6C11 4.89543 10.1046 4 9 4C7.89543 4 7 4.89543 7 6ZM13 17.7358C13.0109 17.7756 13.0194 17.8165 13.0254 17.8583C13.1985 19.069 14.2414 20 15.5 20C16.8807 20 18 18.8807 18 17.5C18 17.3401 17.9851 17.1846 17.9569 17.0345C17.8644 16.5419 18.1508 16.057 18.6267 15.9001C19.4255 15.6369 20 14.8842 20 14C20 13.4871 19.8083 13.0214 19.491 12.6669C19.1511 12.2872 19.1511 11.7128 19.491 11.3331C19.8083 10.9786 20 10.5129 20 10C20 8.89543 19.1046 8 18 8C17.961 8 17.9224 8.0011 17.8841 8.00327C17.5497 8.02222 17.2281 7.8725 17.0272 7.60444C16.8264 7.33638 16.7731 6.98559 16.8853 6.66999C16.9593 6.46184 17 6.23676 17 6C17 4.89543 16.1046 4 15 4C13.8954 4 13 4.89543 13 6V17.7358ZM9 2C10.1947 2 11.2671 2.52376 12 3.35418C12.7329 2.52376 13.8053 2 15 2C17.2091 2 19 3.79086 19 6C19 6.04198 18.9994 6.08382 18.9981 6.12552C20.7243 6.56889 22 8.13546 22 10C22 10.728 21.8049 11.4116 21.4646 12C21.8049 12.5884 22 13.272 22 14C22 15.4817 21.1949 16.7734 19.9999 17.4646L20 17.5C20 19.9853 17.9853 22 15.5 22C14.0859 22 12.8248 21.3481 12 20.3285C11.1752 21.3481 9.91405 22 8.5 22C6.01472 22 4 19.9853 4 17.5L4.00014 17.4646C2.80512 16.7734 2 15.4817 2 14C2 13.272 2.19513 12.5884 2.53536 12C2.19513 11.4116 2 10.728 2 10C2 8.13546 3.27573 6.56889 5.00194 6.12552C5.00065 6.08382 5 6.04198 5 6C5 3.79086 6.79086 2 9 2Z"></path>
              </svg>
            </div>
            <div className="p-4 bg-slate-500 h-[240px] w-[300px] gap-3 rounded-3xl m-2 relative border-gray-200 border-x-2 shadow-black shadow-xl">
              Automation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative m-4 w-8 h-8"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 4C14.5905 4 16.8939 5.23053 18.3573 7.14274L16 9.5H22V3.5L19.7814 5.71863C17.9494 3.452 15.1444 2 12 2 6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20 9.40951 20 7.10605 18.7695 5.64274 16.8573L8 14.5 2 14.5V20.5L4.21863 18.2814C6.05062 20.548 8.85557 22 12 22 17.5228 22 22 17.5228 22 12H20Z"></path>
              </svg>
            </div>
            <div className="p-4 bg-slate-500 h-[240px] w-[300px] gap-3 rounded-3xl m-2 relative border-gray-200 border-x-2 shadow-black shadow-xl">
              Creativity
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative m-4 w-8 h-8"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
