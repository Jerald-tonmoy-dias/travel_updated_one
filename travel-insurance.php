<?php
/**
 * Plugin Name: Travel Insurance Table by Shahrukh
 * Author: Shahrukh Maharuj
 * Author URI: https://travel-journey.quotemeeasy.co.uk/
 * Version: 1.0.0
 * Description: Custom Plugin to Add Travel Insurance Table
 * Text-Domain: shahrukh
 */

if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed.


// require 'vendor/autoload.php';

/**
* Define Plugins Constants
*/
define ( 'TRAVEL_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define ( 'TRAVEL_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

/**
 * Loading Necessary Scripts
 */



add_action( 'wp_enqueue_scripts', 'shahrukh_load_travel_scripts' );
function shahrukh_load_travel_scripts() {
    wp_enqueue_script( 'travel-react-shahrukh', TRAVEL_URL . 'build/index.js', [ 'jquery', 'wp-element' ], wp_rand(), true );
    wp_enqueue_style( 'travel-react-shahrukh', TRAVEL_URL . 'build/index.css' );
    wp_enqueue_style( 'travel-font-awesome', 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' );
    wp_localize_script( 'travel-react-shahrukh', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
        'user_id' => get_current_user_id(),
        'admin_email' => get_bloginfo('admin_email')
    ] );
}


add_action('admin_init', function(){
    add_settings_field(
        'travel_setting-id',
        'Travel Insurance Email To',
        'travel_setting_callback_function',
        'general',
        'default',
        array( 'label_for' => 'travel_setting-name' )
    );

    register_setting( 'general', 'travel_setting-name' ); 
});

function travel_setting_callback_function( $args ) {
    ?>
        <input name="travel_setting-name" placeholder="e.g. admin@test.com" type="email" id="travel_setting-id" value="<?php echo get_option('travel_setting-name'); ?>" class="regular-text">
    <?php 
}


require_once TRAVEL_PATH . 'classes/class-create-shortcode.php';
require_once TRAVEL_PATH . 'classes/class-create-routes.php';