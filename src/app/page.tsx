

export default function Home() {
  return (
    <main>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat h-[500px] text-left"
        style={{
          backgroundImage: `url('../../public/images/darkplank.jpg')`,
          height: "500 px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full max-w-[1200px] overflow-hidden bg-fixed m-auto"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-left pl-[100px]">
            <div className="text-white">
              <h2 className="mb-4 text-5xl font-semibold">REACH YOUR FITNESS GOALS</h2>
              <h4 className="mb-6 text-xl font-semibold">ANYTIME ANYWHERE</h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                SIGN UP TODAY
              </button>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
