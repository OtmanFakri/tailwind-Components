<template>
  <body style="min-height: 540px">
    <div
      class="
        py-12
        dark:bg-black
        bg-gray-700
        transition
        duration-150
        ease-in-out
        z-10
        absolute
        top-0
        right-0
        bottom-0
        left-0
      "
      ref="modal"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="
            relative
            w-96
            bg-white
            dark:bg-gray-800
            shadow
            px-8
            py-10
            rounded
          "
        >
          <div class="flex flex-col items-center">
            <p
              class="
                text-2xl
                font-bold
                leading-normal
                text-gray-800
                dark:text-white
              "
            >
              Subscribe
            </p>
            <p
              class="
                text-sm
                leading-5
                pt-4
                pb-6
                text-center text-gray-600
                dark:text-gray-300
              "
            >
              Get yourself ready for the whole new collection of premium and
              attractive products.
            </p>
            <div class="flex flex-col sm:flex-row items-center">
              <div
                class="
                  sm:mr-2
                  w-60
                  bg-gray-50
                  border
                  rounded
                  border-gray-200
                  bg-gray-50
                  dark:bg-gray-700
                  dark:border-gray-700
                  text-sm
                  leading-none
                  text-gray-600
                  dark:text-white
                "
              >
                <input
                  class="
                    py-2
                    pl-4
                    placeholder-gray-600
                    dark:placeholder-white
                    focus:outline-none
                    bg-transparent
                    w-full
                  "
                  placeholder="Enter your email"
                />
              </div>
              <button
                class="
                  mt-4
                  sm:mt-0
                  focus:outline-none
                  px-4
                  py-3
                  bg-indigo-700
                  dark:bg-indigo-600
                  hover:bg-opacity-80
                  rounded
                "
              >
                <p class="text-xs font-medium leading-3 text-gray-100">
                  Subscribe
                </p>
              </button>
            </div>
            <p
              @click="modalHandler()"
              class="
                cursor-pointer
                text-xs
                leading-3
                underline
                text-center text-gray-600
                dark:text-white
                mt-4
                sm:mt-5
                md:mt-7
              "
            >
              Ask me later
            </p>
          </div>

          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              text-gray-800
              dark:text-gray-100
              transition
              duration-150
              ease-in-out
            "
            @click="modalHandler()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              class="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-12" id="button">
      <button
        class="
          focus:outline-none
          mx-auto
          transition
          duration-150
          ease-in-out
          hover:bg-indigo-600
          bg-indigo-700
          rounded
          text-white
          px-4
          sm:px-8
          py-2
          text-xs
          sm:text-sm
        "
        @click="modalHandler(true)"
      >
        Open Modal
      </button>
    </div>
  </body>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal;
      if (val) {
        fadeIn(modal);
      } else {
        fadeOut(modal);
      }
      function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
      }
      function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }
        })();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

