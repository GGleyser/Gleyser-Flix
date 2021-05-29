<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

    @include('Components.navbar')

    <div class="main">
        @yield('main')
    </div>
    @include('Components.footer')
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

