<?php
/**
 * This file will create shortcode
 */

class Shahrukh_Create_Travel_Shortcode {

    public function __construct() {
        add_shortcode( 'travel-insurance', [ $this, 'sujan_serp_generator' ] );
    }

    public function sujan_serp_generator() {
        ob_start(); 
        ?>
            <div class="shahrukh-wrapper">
                <div id="travel-generator">
                </div>
            </div>
        <?php return ob_get_clean();
    }

}
new Shahrukh_Create_Travel_Shortcode();