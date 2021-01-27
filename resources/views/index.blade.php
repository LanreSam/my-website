<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ezeche Lanre Resume</title>
    <link rel="icon" href="{{ asset('assets/img/favicon.ico') }}" type="image/x-icon">
    <!-- Bootstrap -->
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/ionicons/css/ionicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/aos.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/owlcarousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/lib/magnific-popup/magnific-popup.css') }}" rel="stylesheet">

    @livewireStyles
    <!-- main style -->
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]-->
      {{-- <script src="{{ asset('assets/https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js') }}"></script>
      <script src="{{ asset('assets/https://oss.maxcdn.com/respond/1.4.2/respond.min.js') }}"></script> --}}
    <!--[endif]-->
</head>

<body>

    {{ $slot }}



    @livewireScripts
    {{-- sweet alert library --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous"></script>

    <!-- jQuery -->
    <script src="{{ asset('assets/js/jquery.js') }}"></script>
    <!--  plugins  -->
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins.js') }}"></script>
    <script src="{{ asset('assets/js/aos.js') }}"></script>
    <script src="{{ asset('assets/js/jquery.form.js') }}"></script>
    <script src="{{ asset('assets/js/jquery.validate.min.js') }}"></script>

    <!--Libraries-->
    <script src="{{ asset('assets/lib/owlcarousel/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('assets/lib/magnific-popup/magnific-popup.min.js') }}"></script>


    <!--  main script  -->
    <script src="{{ asset('assets/js/custom.js') }}"></script>

    @if(Session::has('mail-msg'))
        <script>
            swal("Subscription Successful!", "{!! Session::get('mail-msg') !!}", "success", {
                button:"Close",
                title: "DevsHood",
                closeOnClickOutside: false,
            })
        </script>
    @endif
</body>

</html>