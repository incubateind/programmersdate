<?php
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi+2:400,500,600,700,800&display=swap"
        rel="stylesheet">

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/bd3a10f7d4.js" crossorigin="anonymous"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="styles.css" type="text/css">

    <title>Covid-19 Cases</title>


</head>

<body>
    <div class="conatiner">
        <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top"><a href="#home"
                class="navbar-brand"><strong>COVID-19</strong> | India <span
                    class="badge badge-warning"><span>509446</span></span> <span
                    class="badge badge-info"><span>197784</span></span> <span
                    class="badge badge-success"><span>295917</span></span> <span
                    class="badge badge-danger"><span>15689</span></span></a><button type="button"
                aria-label="Toggle navigation" class="navbar-toggler collapsed"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="justify-content-end navbar-collapse collapse">
        </nav>

        <div class="jumbotron">
            <h1 class="title"><strong><br>Hello!</strong> 👋 </h1>
            <h5>We are sure you’ll agree that, at this point, it isn’t an exaggeration to say that we are at war against
                the
                coronavirus and that it is a war we must win. The next few weeks are critical in this battle. I request
                everyone to <b>stay at home</b> and enjoy good time with family.</h5>
            <h4><strong>Let's fight with Corona together! 😷</strong></h4><span
                class="badge badge-pill badge-success">#CoronaKoHaranaHai</span> <span
                class="badge badge-pill badge-secondary">#CoronaVirusLockdown</span>
        </div>
        <div class="container my-2">
            <div class="justify-content-md-center row"><span class="todayButton"><button type="button"
                        class="btn btn-primary">Check Today's Alert</button></span></div>
        </div>

        <div class="container my-2">
            <div class="justify-content-md-center myRow row">
                <div class="myCol col-md-auto col-sm-6">
                    <div><svg viewBox="0 0 100 100" width="100%" height="100%" style="display: block;">
                            <path d="M 95 50 A 45 45 0 0 1 13.590581716101404 76.44530696036841" stroke-width="10"
                                stroke-dasharray="113.10355188867571" stroke-dashoffset="1.4210854715202004e-14"
                                stroke="#ffc107" stroke-linecap="round" fill="none"
                                style="transition: stroke-dashoffset 1200ms ease-out 0s;">
                                <title>Confirmed Cases</title>
                            </path>
                            <path
                                d="M 7.200536214366402 63.89985250505337 A 45 45 0 0 1 6.2538608025135645 60.54871107359288"
                                stroke-width="10" stroke-dasharray="3.4831594037080142"
                                stroke-dashoffset="4.440892098500626e-16" stroke="#dc3545" stroke-linecap="round"
                                fill="none" style="transition: stroke-dashoffset 1200ms ease-out 0s;">
                                <title>Deaths</title>
                            </path>
                            <path
                                d="M 5.135218262984289 46.51411995474004 A 45 45 0 0 1 48.50119107466344 5.0249672395301985"
                                stroke-width="10" stroke-dasharray="65.69737276225793" stroke-dashoffset="0"
                                stroke="#28a745" stroke-linecap="round" fill="none"
                                style="transition: stroke-dashoffset 1200ms ease-out 0s;">
                                <title>cured</title>
                            </path>
                            <path
                                d="M 62.472597450432495 6.763044593317346 A 45 45 0 0 1 92.79754323328191 36.09423525312736"
                                stroke-width="10" stroke-dasharray="43.910587003823444"
                                stroke-dashoffset="-7.105427357601002e-15" stroke="#17a2b8" stroke-linecap="round"
                                fill="none" style="transition: stroke-dashoffset 1200ms ease-out 0s;">
                                <title>active</title>
                            </path><text text-anchor="end" dominant-baseline="middle" fill="#ffc107" x="50" y="50"
                                dx="9.268539106084303" dy="28.532335741032245"
                                style="font-family: &quot;Montserrat Alternates&quot;; font-size: 6px; font-weight: bold;">509446</text><text
                                text-anchor="start" dominant-baseline="middle" fill="#dc3545" x="50" y="50"
                                dx="-28.87015287764142" dy="8.155628291040047"
                                style="font-family: &quot;Montserrat Alternates&quot;; font-size: 6px; font-weight: bold;">15689</text><text
                                text-anchor="start" dominant-baseline="middle" fill="#28a745" x="50" y="50"
                                dx="-20.73893903889805" dy="-21.677094075103113"
                                style="font-family: &quot;Montserrat Alternates&quot;; font-size: 6px; font-weight: bold;">295917</text><text
                                text-anchor="end" dominant-baseline="middle" fill="#17a2b8" x="50" y="50"
                                dx="20.856939150954876" dy="-21.563582477254695"
                                style="font-family: &quot;Montserrat Alternates&quot;; font-size: 6px; font-weight: bold;">197784</text>
                        </svg></div>
                </div>
                <div class="myCol col-md-auto col-sm-6"><button type="button"
                        class="btn btn-warning btn-block btn-lg">Confirmed Cases <span
                            class="badge badge-light">509446</span></button><button type="button"
                        class="btn btn-info btn-block btn-lg">Total Active <span
                            class="badge badge-light">197784</span></button><button type="button"
                        class="btn btn-success btn-block btn-lg">Total Cured <span
                            class="badge badge-light">295917</span></button><button type="button"
                        class="btn btn-danger btn-block btn-lg">Total Deaths <span
                            class="badge badge-light">15689</span></button></div>
            </div>
        </div>
    </div>
</body>

</html>