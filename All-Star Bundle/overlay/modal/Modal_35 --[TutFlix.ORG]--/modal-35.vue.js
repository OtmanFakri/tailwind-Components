<template>
  <div>
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
        class="
          container
          mx-auto
          flex
          justify-center
          w-80
          sm:w-9/12
          md:w-2/3
          xl:w-1/2
          px-4
        "
      >
        <div
          class="relative bg-white dark:bg-gray-800 w-full shadow rounded-md"
        >
          <div class="sm:flex items-center items-stretch">
            <img
              class="
                w-full
                h-72
                sm:h-auto
                object-cover object-center
                sm:w-auto
                rounded-tl rounded-tr
                sm:rounded-tr-none sm:rounded-bl
              "
              src="https://i.ibb.co/NSLg2g3/Rectangle-138.png"
            />
            <div class="w-full">
              <div class="px-6 w-full pt-8">
                <p
                  class="
                    text-2xl
                    font-bold
                    leading-5
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  Sign in
                </p>
                <p
                  class="
                    text-sm
                    leading-4
                    text-gray-600
                    mt-4
                    mb-5
                    dark:text-gray-300
                  "
                >
                  Get notified about our latest updates
                </p>
                <div
                  class="
                    bg-gray-50
                    dark:bg-gray-700
                    border
                    rounded
                    dark:border-gray-700
                    border-gray-200
                  "
                >
                  <input
                    class="
                      py-3
                      pl-4
                      bg-transparent
                      text-sm
                      font-medium
                      leading-none
                      text-gray-600
                      placeholder-gray-600
                      dark:placeholder-gray-300
                      dark:text-gray-300
                      w-full
                      focus:outline-none
                    "
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div
                  class="
                    mt-3
                    bg-gray-50
                    dark:bg-gray-700
                    border
                    rounded
                    dark:border-gray-700
                    border-gray-200
                  "
                >
                  <input
                    class="
                      py-3
                      pl-4
                      bg-transparent
                      text-sm
                      font-medium
                      leading-none
                      text-gray-600
                      placeholder-gray-600
                      dark:placeholder-gray-300
                      dark:text-gray-300
                      w-full
                      focus:outline-none
                    "
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div class="flex items-center justify-between mt-4">
                  <p
                    class="
                      text-xs
                      font-medium
                      leading-3
                      text-gray-600
                      dark:text-gray-300
                      cursor-pointer
                    "
                  >
                    Forgot Password?
                  </p>
                  <button
                    class="
                      focus:outline-none
                      px-5
                      py-2
                      bg-indigo-700
                      dark:bg-indigo-600
                      rounded
                      text-sm
                      font-medium
                      text-gray-100
                      hover:bg-opacity-80
                    "
                  >
                    Login
                  </button>
                </div>
              </div>
              <div
                class="
                  mt-3.5
                  border-gray-200
                  dark:border-gray-700
                  border-t
                  py-4
                  px-6
                "
              >
                <p
                  class="
                    text-xs
                    leading-3
                    text-gray-600
                    dark:text-gray-300
                    cursor-pointer
                  "
                >
                  Don’t have an account?
                  <span
                    class="
                      text-indigo-700
                      dark:text-indigo-600
                      cursor-pointer
                      font-semibold
                    "
                    >Register Here</span
                  >
                </p>
              </div>
            </div>
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
  </div>
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

<style scoped>
</style>

