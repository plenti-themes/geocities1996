<script>
	export let title, env;
</script>

<head>
	<base href="{env.baseurl}" />
	<meta charset="utf-8">
	<title>{ title }</title>
	<script type="module" src="spa/core/main.js?{env.fingerprint}"></script>
	<link rel="icon" type="image/svg+xml" href="media/logo.svg">
	<link rel='stylesheet' href="spa/bundle.css?{env.fingerprint}">
	<link rel="stylesheet" media="screen" href="global.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="A demonstration of what can be accomplished visually through CSS-based design.">
	<meta name="robots" content="all">
</head>
