<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Wedding Of Iftita & Hamal</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        .vertical-line {
            border-left: 1px solid rgb(255, 255, 255);
            /* The thickness and color of the line */
            height: 100px;
            /* The height of the line */
        }

        body {
            background-color: #cadfe1;
        }

        .first-view {
            transition: all .5s;

        }

        .hide-view {
            bottom: -100% !important;
            opacity: .5;
            top: auto;
        }

        @media (min-width:1190px) {
            .container {
                max-width: 60%;
            }
        }

        :where(p, h1, h2, h3, h4, h5, h6) {
            text-align: center;
        }

        .snowRoll {
            position: absolute;
            opacity: 0;
            -webkit-animation-name: mysnow;
            -webkit-animation-duration: 20s;
            -moz-animation-name: mysnow;
            -moz-animation-duration: 20s;
            height: 80px;
        }

        @-webkit-keyframes mysnow {
            0% {
                bottom: 100%;
            }

            50% {
                -webkit-transform: rotate(1080deg);
            }

            100% {
                -webkit-transform: rotate(0deg) translate3d(50px, 50px, 50px);
            }
        }

        @-moz-keyframes mysnow {
            0% {
                bottom: 100%;
            }

            50% {
                -moz-transform: rotate(1080deg);
            }

            100% {
                -moz-transform: rotate(0deg) translate3d(50px, 50px, 50px);
            }
        }
    </style>
</head>

<body>
    <audio id="myAudio" src="./assets/song/backsound.mp3"
        type="audio/mpeg" loop="loop">
        <source src="./assets/song/backsound.mp3"
            type="audio/mpeg"> Your user agent does not support the HTML5 Audio element.
    </audio>
    <div id="snowflake"></div>

    <!-- First View -->
    <section
        class="d-flex show first-view position-fixed bottom-0 left-0 w-100 h-100 justify-content-center align-items-center flex-column"
        style="z-index: 10;background-image:    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),  url(assets/image/image2.jpg);height: 100vh;background-repeat: no-repeat;background-size: cover;background-position: center;">
        <h4 class="text-white mb-2 comic-neue ">The Wedding Of</h4>
        <img class="mb-4 object-fit-cover" src="assets/image/image2.jpg"
            style="width: 200px;height: 200px;border-radius: 50%;" alt="">
        <h1 class="great-vibes text-white">Iftita & Hamal</h1>
        <h6 class="text-white mb-4 comic-neue ">Kpd. Bpk/Ibu/Saudara/I</h6>
        <button id="open-letter" class="btn btn-primary rounded-pill px-4 py-2 text-white"><i
                class="fa fa-envelope"></i> Buka
            Undangan</button>
    </section>



    <!-- Second View -->
    <main id="content">
        <section class="" id="home">
            <div style="background-image:    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(assets/image/image1.jpg);height: 100vh;background-repeat: no-repeat;background-size: cover;background-position: center;"
                class="container position-relative d-flex vh-100 justify-content-center align-items-center flex-column">
                <h4 class="text-white mb-2 comic-neue">The Wedding </h4>
                <h1 class="great-vibes text-white text-center">Iftita <br> & <br> Hamal</h1>
                <h6 class="text-white mb-4 comic-neue ">Kpd. Bpk/Ibu/Saudara/I</h6>
                <div class="d-flex text-white align-items-center gap-4">
                    <h4>Jumat</h4>
                    <div class="vertical-line"></div>
                    <div class="text-center">
                        <h1 class="fw-bold">29</h1>
                        <h6>2024</h6>
                    </div>
                    <div class="vertical-line"></div>

                    <h4>Desember</h4>

                </div>
                <img src="assets/image/wavy-bottom.png" class="img-fluid position-absolute bottom-0 left-0" alt="">
            </div>
        </section>
        <section class="" id="mempelai">
            <div style="min-height: 500px;padding-top:7rem;padding-bottom: 7rem;"
                class="container overflow-hidden  bg-white position-relative d-flex  justify-content-center align-items-center flex-column">
                <img style="width: 300px;" src="assets/image/bismillah.png" class="item-bottom" alt="">
                <h6 class="fw-bold item-bottom" style="margin-top: -40px;">Assalamu'alaikum Warahmatullaahi Wabarakaatuh
                </h6>
                <p class="text-center item-bottom">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah
                    semoga ridho-Mu
                    tercurah
                    mengiringi
                    pernikahan kami.</p>
                <div class="row mb-5 w-100 item-bottom justify-content-center">
                    <div class="col-md-4 col-12 text-center">
                        <h2 class="mb-2 great-vibes fw-bold">Iftita Hidayati Maimunah</h2>
                        <img class="mb-2" src="assets/image/wave-flower.png" alt="">
                        <p>Putri Dari <br>
                            Bapak H. Abdul Rachman & <br>
                            Ibu HJ Siti Chotimah</p>
                    </div>
                    <div class="col-md-4 item-bottom col-12 text-center">
                        <h2 class="mb-2 great-vibes fw-bold">Hamal Dika Hardian Surya</h2>
                        <img class="mb-2" src="assets/image/wave-flower.png" alt="">
                        <p>Putra Dari <br>
                            Bapak H. Bambang Supriadi & <br>
                            Ibu HJ. Sri Hastutik</p>
                    </div>
                </div>
                <h5 class="mb-5 mt-5">Jum'at, 29 Desember 2024</h5>
                <div class="row mb-5 justify-content-center g-4">
                    <div class="col">
                        <div class="card item-bottom-stack  border-0 shadow-sm justify-content-center d-flex flex-column align-items-center"
                            style="width: 100px;height: 100px;">
                            <h2 class="mb-0" id="days">00</h2>
                            <h6>Days</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card item-bottom-stack border-0 shadow-sm justify-content-center d-flex flex-column align-items-center"
                            style="width: 100px;height: 100px;">
                            <h2 class="mb-0" id="hours">00</h2>
                            <h6>Hours</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card item-bottom-stack border-0 shadow-sm justify-content-center d-flex flex-column align-items-center"
                            style="width: 100px;height: 100px;">
                            <h2 class="mb-0" id="minutes">00</h2>
                            <h6>Min</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card item-bottom-stack border-0 shadow-sm justify-content-center d-flex flex-column align-items-center"
                            style="width: 100px;height: 100px;">
                            <h2 class="mb-0" id="seconds">00</h2>
                            <h6>Sec</h6>
                        </div>
                    </div>
                </div>
                <a target="_blank"
                    href="https://calendar.google.com/calendar/u/0/r/eventedit?text=The+Wedding+of+Dewi+and+Erfan&dates=20241205T090000Z/20241205T120000Z&details=The+Wedding+of+Dewi+and+Erfan%21&location=Gedung+Pernikahan+ABC,+Jakarta"
                    class="btn btn-primary item-bottom-bounce rounded-pill mb-5 text-white px-4"><i class="fa fa-calendar"> </i> Ingatkan
                    via
                    Google Kalender</a>

                <img src="assets/image/wavy-bottom.png" class="img-fluid position-absolute  left-0"
                    style="z-index: 2;bottom: 0px;" alt="">
                <img src="assets/image/wavy-top.png" class="img-fluid position-absolute top-0 left-0"
                    style="z-index: 2;" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-20px;left: -7%;width: 30%;" alt="">
                <img src="assets/image/flowerRightTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-150px;right: -30%;width: 60%;" alt="">
                <img src="assets/image/flowerleftBottom.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-150px;left: -30%;width: 60%;transform: rotate(180deg);" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-20px;right: -7%;width: 30%;transform: rotate(200deg);" alt="">
            </div>
        </section>
        <section class="" id="acara">
            <div style="min-height: 500px;padding-top:7rem;padding-bottom: 7rem;"
                class="container overflow-hidden   bg-white position-relative d-flex  justify-content-center align-items-center flex-column">
                <div class="row mb-4 w-100 justify-content-center">
                    <div class="col-md-4 col-12">
                        <div
                            class="card item-bottom border-0  shadow-sm justify-content-center d-flex flex-column align-items-center">
                            <h1 class="great-vibes">Resepsi Nikah</h1>
                            <p class="mb-3"><i class="fa fa-calendar"></i> Jum'at, 29 Desember 2024</p>
                            <p class="mb-3"><i class="fa fa-clock"></i> 09:00 WIB - Selesai</p>
                            <h5 class="fw-bold mb-3">Lokasi / Tempat Acara:</h5>
                            <p class="text-center">jalan Mayjend soekartiyo RT 2 Rw 1 <br> desa Yosowilangun kidul <br>kecamatan Yosowilangun <br>kabupaten Lumajang</p>
                        </div>
                    </div>
                </div>
                <p style="max-width: 100%; width: 800px;" class="text-center item-bottom">Merupakan kehormatan serta kebahagiaan
                    bagi
                    kami sekeluarga
                    apabila
                    Bapak/Ibu/Saudara/i berkenan hadir
                    untuk memberikan
                    doa restu kepada kedua mempelai.</p>
                <p class="fw-bold item-bottom">Jazakumullah Khairan Katsiran
                    Wassalamuallaikum Warrahmatullahi Wabarakatuh</p>
                <p class="fw-bold item-bottom">Kami yang berbahagia,</p>
                <h1 class="great-vibes item-bottom">Iftita & Hamal</h1>
                <p class="fw-bold item-bottom">
                    Beserta keluarga besar kedua mempelai
                </p>
                <h1 class="great-vibes item-bottom">Denah Lokasi</h1>

                <img class="mb-5" src="assets/image/wave-flower.png" alt="">
                <div class="mb-4 item-bottom-zoom" style="max-width: 100%;width: 600px;aspect-ratio: 3/2;">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.6638690124423!2d113.3137!3d-8.236514999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTQnMTEuNSJTIDExM8KwMTgnNDkuMyJF!5e0!3m2!1sid!2sid!4v1733534093102!5m2!1sid!2sid"
                        width="100%" height="100%" style="border: 0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
                <a href="https://maps.app.goo.gl/MpbXArV2gmSPktoX7?g_st=aw"
                    class="btn btn-primary item-bottom-bounce rounded-pill mb-5 text-white px-4" target="_blank">
                    <i class="fa fa-map"></i> Lihat lokasi acara
                </a>
                <img src="assets/image/wavy-bottom.png" class="img-fluid position-absolute  left-0"
                    style="z-index: 2;bottom: 0px;" alt="">
                <img src="assets/image/wavy-top.png" class="img-fluid position-absolute top-0 left-0"
                    style="z-index: 2;" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-20px;left: -7%;width: 30%;" alt="">
                <img src="assets/image/flowerRightTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-150px;right: -30%;width: 60%;" alt="">
                <img src="assets/image/flowerleftBottom.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-150px;left: -30%;width: 60%;transform: rotate(180deg);" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-20px;right: -7%;width: 30%;transform: rotate(200deg);" alt="">
            </div>
        </section>
        <section class="">
            <div style="min-height: 500px;padding-top:7rem;padding-bottom: 7rem;"
                class="container overflow-hidden   bg-white position-relative d-flex  justify-content-center align-items-center flex-column">
                <h4 class="fw-bold text-center item-bottom" style="max-width: 100%;width: 600px;">وَمِنۡ اٰيٰتِهٖۤ اَنۡ خَلَقَ
                    لَكُمۡ مِّنۡ
                    اَنۡفُسِكُمۡ اَزۡوَاجًا لِّتَسۡكُنُوۡۤا
                    اِلَيۡهَا وَجَعَلَ
                    بَيۡنَكُمۡ
                    مَّوَدَّةً وَّرَحۡمَةً  ؕ اِنَّ فِىۡ ذٰ لِكَ لَاٰيٰتٍ لِّقَوۡمٍ يَّتَفَكَّرُوۡنَ</h4>
                <p class="text-center item-bottom" style="max-width: 100%;width: 600px;">“Dan di antara tanda-tanda kekuasaan-Nya
                    ialah Dia menciptakan untukmu
                    istri-istri dari jenismu
                    sendiri, supaya kamu
                    cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
                    Sesungguhnya pada yang
                    demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”</p>
                <h6 class="fw-bold item-bottom">QS Ar-Rum: 21</h6>

                <img src="assets/image/wavy-bottom.png" class="img-fluid position-absolute  left-0"
                    style="z-index: 2;bottom: 0px;" alt="">
                <img src="assets/image/wavy-top.png" class="img-fluid position-absolute top-0 left-0"
                    style="z-index: 2;" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-20px;left: -7%;width: 30%;" alt="">
                <img src="assets/image/flowerRightTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-150px;right: -30%;width: 60%;" alt="">
                <img src="assets/image/flowerleftBottom.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-150px;left: -30%;width: 60%;transform: rotate(180deg);" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-20px;right: -7%;width: 30%;transform: rotate(200deg);" alt="">
            </div>
        </section>

        <section class="" id="ucapan">
            <div style="min-height: 500px;padding-top:7rem;padding-bottom: 7rem;"
                class="container overflow-hidden   bg-white position-relative d-flex  justify-content-center align-items-center flex-column">
                <h1 class="great-vibes item-bottom">Kirim Ucapan & Doa Restu</h1>
                <form id="comment-form" class="position-relative item-bottom d-flex flex-column" action="" style="width: 600px;max-width: 100%;z-index:3;">
                    <input required type="text" placeholder="Nama lengkap" name="nama" id="" class="form-control mb-2">
                    <textarea required name="keterangan" class="form-control" id="" placeholder="Tulis ucapan & doa restu"></textarea>
                    @csrf
                    <button type="submit" class="btn btn-primary text-white btn-sm px-4  mt-2 ms-auto me-0">Send</button>
                </form>


                <div class="mt-4 overflow-auto item-bottom" style="width: 600px;max-width: 100%; max-height: 500px;">
                    <ul class="list-unstyled" id="comments">

                    </ul>
                </div>
                <img src="assets/image/wavy-bottom.png" class="img-fluid position-absolute  left-0"
                    style="z-index: 2;bottom: 0px;" alt="">
                <img src="assets/image/wavy-top.png" class="img-fluid position-absolute top-0 left-0"
                    style="z-index: 2;" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-20px;left: -7%;width: 30%;" alt="">
                <img src="assets/image/flowerRightTop.png" class=" position-absolute "
                    style="min-width: 150px;top:-150px;right: -30%;width: 60%;" alt="">
                <img src="assets/image/flowerleftBottom.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-150px;left: -30%;width: 60%;transform: rotate(180deg);" alt="">
                <img src="assets/image/flowerLeftTop.png" class=" position-absolute "
                    style="min-width: 150px;bottom:-20px;right: -7%;width: 30%;transform: rotate(200deg);" alt="">
            </div>
        </section>
    </main>
    <br><br><br><br>
    <br><br><br><br>


    <nav class="position-fixed bottom-0 left-0 w-100 " style="z-index: 3;">
        <div class="container bg-white h-100 ">
            <ul class="d-flex list-unstyled m-0 py-2 px-4 justify-content-around">
                <li><a class="d-flex flex-column align-items-center text-decoration-none" href=" #home"><i
                            class="fa fa-house"></i> Home</a>
                </li>
                <li><a class="d-flex flex-column align-items-center text-decoration-none" href=" #mempelai"><i
                            class="fa fa-heart"></i>
                        Mempelai</a></li>
                <li><a class="d-flex flex-column align-items-center text-decoration-none" href=" #acara"><i
                            class="fa fa-calendar"></i>
                        Acara</a></li>
                <li><a class="d-flex flex-column align-items-center text-decoration-none" href=" #ucapan"><i
                            class="fa fa-comment"></i>
                        Ucapan</a></li>
            </ul>
        </div>
    </nav>

    <button id="musicToggle" class=" shadow-sm btn btn-light rounded-circle position-fixed " style="top:50%;right:20px;transform: translateY(-50%);"><i class="fa fa-pause"></i></button>

    <script src="./assets/js/jquery.min.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>

    <!-- <script src="./assets/bootstrap/js/bootstrap.min.js"></script> -->


    <script>
        const showComment = () => {
            fetch("/comments").then(json => json.json()).then(data => {
                let html = "";
                data.forEach(d => {
                    const date = new Date(d.created); // Format ISO (YYYY-MM-DD)
                    const dateFormat = date.toLocaleDateString("id-ID");

                    html += `<li class="border-b  mb-2 item-bottom">
                            <div class="d-flex align-items-center gap-3">
                                <i class="fa-regular fa-comment-dots" style="font-size:3rem"></i>
                                <div class="flex-grow-1">
                                    <div class="d-flex">
                                        <h6 class="fw-bold">${d.nama}</h6>
                                        <small class="ms-auto">${dateFormat}</small>
                                    </div>
                                    <p class="text-start">${d.keterangan}</div>
                            </div>
                        </li>`;
                });
                $("#comments").empty().append(html);
            })
        }
        showComment()
        $("#comment-form").on("submit", function(e) {
            e.preventDefault();
            const formData = new FormData();
            const {
                value: namaVal
            } = e.target.nama;
            const {
                value: keteranganVal
            } = e.target.keterangan;
            const {
                value: tokenVal
            } = e.target._token;
            formData.append("nama", namaVal)
            formData.append("keterangan", keteranganVal)
            formData.append("_token", tokenVal)
            fetch("/comments", {
                    method: "POST",
                    body: formData
                })
                .then(json => json.json())
                .then(data => {
                    showComment()
                    e.target.reset();
                })
                .catch(err => console.log(err))
        })

        $("#musicToggle").on("click", function() {
            const audio = $("#myAudio").get(0);
            if (audio.paused) {
                audio.play();
                $(this).find("i").removeClass("fa-play").addClass("fa-pause")
            } else {
                $(this).find("i").removeClass("fa-pause").addClass("fa-play")
                audio.pause();
            }
        });
    </script>

    <script>
        var opt = {
            distance: '50%',
            opacity: "0",
            interval: 100,
            reset: false,
            duration: 1000,
            delay: 200,

        };
        ScrollReveal().reveal('.item-bottom', {
            origin: 'bottom',
            ...opt
        });
        var opt = {
            distance: '50%',
            opacity: 0,
            interval: 100,
            reset: false,
            duration: 800,
            delay: 100,
            easing: 'ease-in-out', // Membuat efek lebih dinamis
            scale: 1.2, // Memperbesar saat masuk
        };

        ScrollReveal().reveal('.item-bottom-bounce', {
            origin: 'bottom',
            ...opt
        });
        document.querySelectorAll('.item-bottom-stack').forEach((item, index) => {
            ScrollReveal().reveal(item, {
                origin: 'bottom',
                distance: '50%',
                opacity: 0,
                duration: 1000,
                delay: index * 200, // Tambahkan delay berdasarkan urutan item
                reset: false,
            });
        });


        var opt = {
            distance: '50%',
            opacity: 0,
            scale: 0.9, // Menambahkan efek zoom
            interval: 150,
            reset: false,
            duration: 1200,
            delay: 100,
        };

        ScrollReveal().reveal('.item-bottom-zoom', {
            origin: 'bottom',
            ...opt
        });
    </script>

    <script>
        // Timeout schedule
        // Set target date
        const targetDate = new Date('2024-12-29T00:00:00').getTime();

        // Update countdown every second
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining > 0) {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                // Update HTML elements
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            } else {
                // Clear the interval and display a message or perform an action
                clearInterval(countdownInterval);
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }, 1000);
    </script>


    <script type="text/javascript">
        $(function() {


            var snowflakeURl = [
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
                'https://app.sangmempelai.id/webview/template/front/falling-effect/wavy-sfe-07-1.png',
            ]

            var container = $("#content");
            visualWidth = container.width();
            visualHeight = container.height();

            function snowflake() {
                // Snowflake container
                var $flakeContainer = $('#snowflake');

                // Six random graphs
                function getImagesName() {
                    return snowflakeURl[[Math.floor(Math.random() * 7)]];
                }
                // Create a snowflake element
                function createSnowBox() {
                    var url = getImagesName();

                    return $('<div class="snowbox" />').css({
                        'width': 70,
                        'height': 75,
                        'position': 'fixed',
                        'backgroundSize': 'cover',
                        'zIndex': 9,
                        'backgroundImage': 'url(' + url + ')'
                    }).addClass('snowRoll');
                }
                // Began to float flowers
                setInterval(function() {
                    // Trajectory of motion
                    var startPositionLeft = Math.random() * visualWidth - 100,
                        startOpacity = 1,
                        endPositionTop = visualHeight - 40,
                        endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
                        duration = visualHeight * 10 + Math.random() * 5000;

                    // Random transparency, no less than 0.5
                    var randomStart = Math.random();
                    randomStart = randomStart < 0.5 ? startOpacity : randomStart;
                    // Create a snowflake
                    var $flake = createSnowBox();
                    // Design start position
                    $flake.css({
                        left: startPositionLeft,
                        opacity: randomStart
                    });
                    // Add to container
                    $flakeContainer.append($flake);

                    //jquery does not introduce other js writing methods
                    $flake.animate({
                        top: endPositionTop,
                        left: endPositionLeft,
                        opacity: 0.7
                    }, duration, 'linear', function() {
                        $(this).remove() //Delete after end
                    });

                }, 1200); // default 200
            }
            snowflake()
            //Execution function

        })
    </script>
    <script>
        $("body").addClass("overflow-hidden")
        $("#open-letter").click(function() {
            $(".first-view").addClass("hide-view");
            $("body").removeClass("overflow-hidden")
            $("#myAudio").get(0).play();
        })
    </script>
</body>

</html>