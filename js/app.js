document.addEventListener("DOMContentLoaded", () => {
   'strict mode';

   const slideModule = (function () {
      /***** Chapter *****/
      const chapter = () => {
         var stop_typing = 0;
         var chapter = "CHAPTER 01";
         var previous_chapter = "";
         function type_text(chapter) {
            if(previous_chapter != chapter) {
               if(stop_typing === 0) {
                  stop_typing = 1;
                  let str = chapter;
                  let typing = ' ';
                  let i = 0;
                  (function type() {
                     if(i < str.length) {
                        typing = typing+str.charAt(i);
                        document.querySelector("#chapter--title").textContent = typing+'_';
                     } else {
                        document.querySelector("#chapter--title").textContent = typing;
                        return false;
                     }
                     let speed = Math.floor(Math.random()*10)+25;
                     setTimeout(() => {
                        type();
                     }, speed)
                     i++;

                     if(str.length === i) {
                        setTimeout(() => {
                           document.querySelector(".chapter--container").addEventListener("mouseover", () => {
                              let chapter__active = document.querySelectorAll(".chapter--container > a");
                              chapter__active[0].addEventListener("mouseover", () => {type_text("CHAPTER 01");});
                              chapter__active[1].addEventListener("mouseover", () => {type_text("CHAPTER 02");});
                              chapter__active[2].addEventListener("mouseover", () => {type_text("CHAPTER 03");});
                              chapter__active[3].addEventListener("mouseover", () => {type_text("CHAPTER 04");});
                              chapter__active[4].addEventListener("mouseover", () => {type_text("CHAPTER 05");});
                           },
                           addEventListener("mouseover", () => {
                              let scrollTop_chapter = document.querySelector(".chapter").getBoundingClientRect().top + document.documentElement.scrollTop;
                              let scrollTop_header = document.querySelector("#header").getBoundingClientRect().top + document.documentElement.scrollTop;
                              let scrollTop_second_section = document.querySelector("#second--section").getBoundingClientRect().top + document.documentElement.scrollTop;
                              let scrollTop_third_section = document.querySelector("#third--section").getBoundingClientRect().top + document.documentElement.scrollTop;
                              let scrollTop_fourth_section = document.querySelector("#fourth--section").getBoundingClientRect().top + document.documentElement.scrollTop;
                              let scrollTop_fifth_section = document.querySelector("#fifth--section").getBoundingClientRect().top + document.documentElement.scrollTop;

                              if(chapter != "CHAPTER 01" && (document.documentElement.scrollTop == 0 || (scrollTop_chapter > scrollTop_header && scrollTop_chapter < scrollTop_second_section))) {type_text("CHAPTER 01");}
                              else if(chapter != "CHAPTER 02" && scrollTop_chapter > scrollTop_second_section && scrollTop_chapter < scrollTop_third_section) {type_text("CHAPTER 02");}
                              else if(chapter != "CHAPTER 03" && scrollTop_chapter > scrollTop_third_section && scrollTop_chapter < scrollTop_fourth_section) {type_text("CHAPTER 03");}
                              else if(chapter != "CHAPTER 04" && scrollTop_chapter > scrollTop_fourth_section && scrollTop_chapter < scrollTop_fifth_section) {type_text("CHAPTER 04");}
                              else if(chapter != "CHAPTER 05" && scrollTop_chapter > scrollTop_fifth_section){type_text("CHAPTER 05");}
                          }), 600);
                       });
                     stop_typing = 0;
                     previous_chapter = chapter;
                     }
                  }());
               }
            }
         }

         // position after refresh
         let scrollTop_chapter = document.querySelector(".chapter").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_header = document.querySelector("#header").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_second_section = document.querySelector("#second--section").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_third_section = document.querySelector("#third--section").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_fourth_section = document.querySelector("#fourth--section").getBoundingClientRect().top + document.documentElement.scrollTop;
         let scrollTop_fifth_section = document.querySelector("#fifth--section").getBoundingClientRect().top + document.documentElement.scrollTop;

         function st_reset() {
            for(let i=1;i<=5;i++) {document.querySelector("#st_"+i).style = "height:12px";}

            let chapter_div = document.querySelectorAll(".chapter--container > div");
            for(let i=0;i<chapter_div.length;i++) {
               chapter_div[i].style = "background:#f44336";
               if(i>=1 && i<=5) document.querySelector("#st_"+i).style = "background:#f44336";
            }
         }


         // chapter 1
         if(document.documentElement.scrollTop === 0 || (scrollTop_chapter < scrollTop_second_section)) {
            st_reset();
            document.querySelector("#st_1").style = "height:20px;background:#f44336";

            type_text("CHAPTER 01");
         }
         // chapter 2
         else if(scrollTop_chapter > scrollTop_second_section && scrollTop_chapter < scrollTop_third_section) {
            st_reset();
            document.querySelector("#st_2").style = "height:20px;background:#f44336";

            type_text("CHAPTER 02");
         } else if (scrollTop_chapter > scrollTop_third_section && scrollTop_chapter < scrollTop_fourth_section) {
            st_reset();
            document.querySelector("#st_3").style = "height:20px;background:#f44336";

            type_text("CHAPTER 03");
         } else if (scrollTop_chapter > scrollTop_fourth_section && scrollTop_chapter < scrollTop_fifth_section) {
            st_reset();
            document.querySelector("#st_4").style = "height:20px;background:#f44336";

            type_text("CHAPTER 04");
         // chapter 5
         } else if(scrollTop_chapter > scrollTop_fifth_section) {
            st_reset();
            document.querySelector("#st_5").style = "height:20px;background:#f44336";

            type_text("CHAPTER 05");
         }

         // scroll
         window.onscroll = () => {
            let scrollTop_chapter = document.querySelector(".chapter").getBoundingClientRect().top + document.documentElement.scrollTop;
            let scrollTop_header = document.querySelector("#header").getBoundingClientRect().top + document.documentElement.scrollTop;
            let scrollTop_second_section = document.querySelector("#second--section").getBoundingClientRect().top + document.documentElement.scrollTop;
            let scrollTop_third_section = document.querySelector("#third--section").getBoundingClientRect().top + document.documentElement.scrollTop;
            let scrollTop_fourth_section = document.querySelector("#fourth--section").getBoundingClientRect().top + document.documentElement.scrollTop;
            let scrollTop_fifth_section = document.querySelector("#fifth--section").getBoundingClientRect().top + document.documentElement.scrollTop;

            // chapter 1
            if(document.documentElement.scrollTop === 0 || (scrollTop_chapter < scrollTop_second_section)) {
               st_reset();
               document.querySelector("#st_1").style = "background:#f44336;height:20px";

               type_text("CHAPTER 01");
            //chapter 2
         } else if (scrollTop_chapter > scrollTop_second_section && scrollTop_chapter < scrollTop_third_section) {
               st_reset();
               document.querySelector("#st_2").style = "background:#f44336;height:20px";

               type_text("CHAPTER 02");
            // chapter 3
            } else if (scrollTop_chapter > scrollTop_third_section && scrollTop_chapter < scrollTop_fourth_section) {
               st_reset();
               document.querySelector("#st_3").style = "height:20px;background:#f44336";

               type_text("CHAPTER 03");
            // chapter 4
            } else if (scrollTop_chapter > scrollTop_fourth_section && scrollTop_chapter < scrollTop_fifth_section) {
               st_reset();
               document.querySelector("#st_4").style = "height:20px;background:#f44336";

               type_text("CHAPTER 04");
            // chapter 5
            } else if(scrollTop_chapter > scrollTop_fifth_section) {
               st_reset();
               document.querySelector("#st_5").style = "height:20px;background:#f44336";

               type_text("CHAPTER 05");
            }
         }
      }
      /***** /Chapter *****/

      return {chapter : chapter}
   })();
   slideModule.chapter();
});
