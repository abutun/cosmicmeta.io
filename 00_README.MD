* comicmeta.io Newspaper theme upgrade

Add this to end of  theme's function.php file

function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a {
            background-image: url('https://buhane.ams3.cdn.digitaloceanspaces.com/2024/05/cmd_logo_500x500.png');
                        height: 200px;
                        width: 200px;
                        background-size: 200px 200px;
                        background-repeat: no-repeat;
                padding-bottom: 30px;
        }
    </style>
<?php }

add_action( 'login_enqueue_scripts', 'my_login_logo' );

function google_ads_js() {
    echo '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0933596618605148" crossorigin="anonymous"></script>';
}
// Add hook for admin <head></head>
// add_action( 'admin_head', 'my_custom_js' );

// Add hook for front-end <head></head>
add_action( 'wp_head', 'google_ads_js' );

add_action( 'rest_api_init', function() {
  // 1) Newspaper’s “post template” & “subtitle” live in a single meta key:
  register_post_meta( 'post', 'td_post_theme_settings', [
    'single'       => true,
    'type'         => 'object',
    'show_in_rest' => [
      'schema' => [
        'type'       => 'object',
        'properties' => [
          'td_post_template' => [ 'type' => 'string' ],
          'td_subtitle'      => [ 'type' => 'string' ],
          'td_primary_cat'   => [ 'type' => 'string' ],
        ],
      ],
    ],
  ] );

  // 2) Yoast SEO fields
  register_post_meta( 'post', '_yoast_wpseo_focuskw', [
    'single'       => true,
    'type'         => 'string',
    'show_in_rest' => true,
  ] );
  
  register_post_meta( 'post', '_yoast_wpseo_metadesc', [
    'single'       => true,
    'type'         => 'string',
    'show_in_rest' => true,
  ] );
  
  register_post_meta( 'post', '_yoast_wpseo_primary_category_term', [
    'single'       => true,
    'type'         => 'string',
    'show_in_rest' => true,
  ] );
  
  register_post_meta( 'post', 'ilj_linkdefinition', [
    'single'       => true,
    'type'         => 'array',
    'show_in_rest' => [
      'schema' => [
        'type'  => 'array',
        'items' => [ 'type' => 'string' ],
      ],
    ],
  ] );  
});
