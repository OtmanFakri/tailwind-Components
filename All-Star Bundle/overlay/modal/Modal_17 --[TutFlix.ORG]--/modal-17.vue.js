<template>
  <body style="min-height: 650px">
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
      id="modal1"
      ref="modal1"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="relative rounded shadow-lg py-8 px-3 dark:bg-gray-800 bg-white"
        >
          <div class="flex flex-col items-center sm:flex-row sm:items-end">
            <img src="https://i.ibb.co/SNxGHrs/2020-06-11-15-39-1.png" />
            <div class="mt-4 sm:mt-0 sm:ml-5">
              <p
                class="
                  text-lg
                  font-bold
                  leading-none
                  dark:text-gray-100
                  text-gray-800
                "
              >
                We serve cookies
              </p>
              <p
                class="
                  w-72
                  text-sm
                  leading-tight
                  text-gray-500
                  dark:text-gray-400
                  mt-3
                "
              >
                This website uses cookies to improve user experience. By using
                our website you consent to all cookies in accordance with our
                Cookie Policy.
              </p>
              <button
                class="
                  mt-6
                  px-6
                  py-3
                  bg-indigo-700
                  dark:bg-indigo-600
                  focus:outline-none
                  hover:bg-opacity-80
                  rounded
                  text-xs
                  font-semibold
                  leading-3
                  text-gray-100
                "
              >
                Accept & continue
              </button>
            </div>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              dark:text-gray-100
              text-gray-400 text-gray-600
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
    return {
      mobileMenu: true,
    };
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal1;
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
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>


