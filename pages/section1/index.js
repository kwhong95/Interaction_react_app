import React, { useEffect } from 'react'
import styles from '../../styles/section1.module.css'
import $ from '../../libs/jquery.1.12.4';


const Section1 = () => {
    $(function () {
        var text = $('.progress .txt');
        var progressBar = $('.progress .bar');


        function getPercent() {
            var scrollHeight =  $('.sec01').height();
            var scrollRealHeight = (scrollHeight - $(window).height());
            var winScrollTop = $(window).scrollTop();
            var scrollPercent = (winScrollTop / scrollRealHeight) * 100;
            var textPercent = Math.floor(scrollPercent);

            console.log(textPercent);

            render(textPercent, scrollPercent);
        }

        function render(textPercent, scrollPercent) {
            text.text(textPercent + '%');

            progressBar.css({
                width: scrollPercent + '%'
            });
        }

         function init() {
            getPercent();
        };

        $(window).scroll(function() {
            getPercent();
        });

        init();
    })
    return (
        <div className='wrap'>
          <section className={styles.sec01}>
            <h2 className={styles.com_tit}>스크롤 백분율 구하기</h2>
            <p className={styles.com_txt}>전체 페이지의 높이와 스크롤 높이를 계산하여 게이지화 한다.</p>
            <article className={styles.content}>
              <div className={styles.progress}>
                <span className={styles.bar}/>
                <p className={styles.txt}>0%</p>
              </div>
                가<br/>
                나<br/>
                다<br/>
                라<br/>
                마<br/>
                바<br/>
                사<br/>
                아<br/>
                자<br/>
                차<br/>
                카<br/>
                타<br/>
                파<br/>
                하
            </article>
          </section>
        </div>
    )
}

export default Section1

