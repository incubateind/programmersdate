<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">

    <title>HMS</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">HMS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Beds</a>
                    </li>




            </div>
        </div>
    </nav>
    <div class="main-body grid-container fluid">
    <div class="cell auto my-3">
        <table id="beds" class="beds-table">
            <thead>
                <tr>
                    <th data-sort="string">Name</th>
                    <th data-sort="string" class="show-for-medium mx-2">Type</th>
                    <th data-sort="int" data-sort-default="desc">Total</th>
                    <th data-sort="int" data-sort-default="desc" data-sort-onload="yes" class="sorting-desc">Vacant</th>
                </tr>
            </thead>
        </table>
        <tbody>
            <tr>
                <td>
                    <h5 class="vac-over50">Lok Nayak (LNJP)</h5>
                    <p>
                        <span class="label show-for-small-only">Delhi Govt</span>
                    </p>
                    <address>Jawahar Lal Nehru Marg, Delhi 110002</address>
                    <address>Last updated at: 09:16 AM, June 27</address>
                    <div class="numbers">
                        <i class="fa fa-phone-alt" aria-hidden="true"></i><a href="tel:011 23232400">011 23232400</a> <a
                            href="https://www.google.co.in/maps/place/Lok+Nayak+Hospital/@28.6731154,77.1870365,13z/data=!4m8!1m2!2m1!1sLok+Nayak+Hospital!3m4!1s0x390cfd27b3316b6d:0xa9d62fda6be69577!8m2!3d28.6382666!4d77.2385937?hl=en&amp;authuser=0"
                            target="_blank"><i class="fa fa-map-marker-alt" aria-hidden="true"></i> Location</a>
                    </div>
                </td>
                <td class="show-for-medium">
                    <div class="label">Delhi Govt</div>
                </td>
                <td class="text-right">2000</td>
                <td class="text-right">1295</td>
            </tr>
        </tbody>
    </div>
    </div>


    <!-- Optional JavaScript -->
    <!-- Popper.js first, then Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous">
    </script>
</body>

</html>