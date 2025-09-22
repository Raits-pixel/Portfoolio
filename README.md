<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minu Portfoolio</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }
        .hero-section {
            background: linear-gradient(135deg, #6b7280, #1f2937);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        .card-img-top {
            height: 200px;
            object-fit: cover;
        }
        .portfolio-section {
            padding: 40px 0;
        }
    </style>
</head>
<body>
    <!-- Hero sektsioon -->
    <section class="hero-section">
        <div class="container">
            <h1>Minu Portfoolio</h1>
            <p>Tere! Olen Raiten Lokk, Mainor ettevõtluskõrgkooli kolmanda kursuse tudeng. Siin on minu kooliprojektid ning tehtud tööd.</p>
            <a href="mailto:sinu.email@domain.com" class="btn btn-light">Võta ühendust</a>
        </div>
    </section>

    <!-- Portfoolio kaardid -->
    <section class="portfolio-section">
        <div class="container">
            <h2 class="text-center mb-4">Minu Tööd</h2>
            <div class="row">
                <!-- Kaart 1 -->
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Projekt 1 pilt">
                        <div class="card-body">
                            <h5 class="card-title">Projekt 1: Veebileht</h5>
                            <p class="card-text">Arendasin interaktiivse veebilehe HTML, CSS ja JavaScriptiga. Funktsionaalsus hõlmab kasutajaliidest ja API integratsiooni.</p>
                            <a href="https://github.com/sinu-kasutaja/projekt1" class="btn btn-primary">Vaata projekti</a>
                        </div>
                    </div>
                </div>
                <!-- Kaart 2 -->
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Projekt 2 pilt">
                        <div class="card-body">
                            <h5 class="card-title">Projekt 2: Mobiilirakendus</h5>
                            <p class="card-text">Lõin Flutteriga mobiilirakenduse, mis võimaldab kasutajatel jälgida oma ülesandeid.</p>
                            <a href="https://github.com/sinu-kasutaja/projekt2" class="btn btn-primary">Vaata projekti</a>
                        </div>
                    </div>
                </div>
                <!-- Kaart 3 -->
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Projekt 3 pilt">
                        <div class="card-body">
                            <h5 class="card-title">Töö: Andmebaasi optimeerimine</h5>
                            <p class="card-text">Töötasin ettevõttes X, kus optimeerisin SQL andmebaasi, vähendades päringute aega 30%.</p>
                            <a href="https://example.com" class="btn btn-primary">Rohkem infot</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
        <p>Kontakt: <a href="mailto:sinu.email@domain.com" class="text-white">sinu.email@domain.com</a> | LinkedIn: <a href="https://linkedin.com/in/sinu-kasutaja" class="text-white">Minu profiil</a></p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
