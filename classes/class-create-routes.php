<?php


/**
 * This file will create Custom Rest API End Points.
 */
class WP_React_Travel_Rest_Route {

    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'create_rest_routes' ] );
    }

    public function create_rest_routes() {
        register_rest_route( 'sujan/v1', '/serp', [
            'methods' => 'GET',
            'callback' => [ $this, 'get_settings' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'sujan/v1', '/serp', [
            'methods' => 'POST',
            'callback' => [ $this, 'save_settings' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]
        ] );

        register_rest_route( 'sujan/v1', '/search/{keyword}', [
            'methods' => 'GET',
            'callback' => [ $this, 'get_search' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'sujan/v1', '/search', [
            'methods' => 'POST',
            'callback' => [ $this, 'save_search' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]
        ] );

        register_rest_route( 'shahrukh/v1', '/travel_mail', [
            'methods' => 'POST',
            'callback' => [ $this, 'send_mail' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]
        ] );


    }

    public function file_get_contents_curl($url) {
        $ch = curl_init();
    
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Set curl to return the data instead of printing it to the browser.
        curl_setopt($ch, CURLOPT_URL, $url);
    
        $data = curl_exec($ch);
        curl_close($ch);
    
        return $data;
    }

    public function get_settings($req) {

        $web = new \spekulatius\phpscraper();

        if(!empty($req['url'])) : 

            $web->go( esc_url($req['url']) );

            $title = $web->title;
            if( $web->description == null ){
                $description = "WARNING: Meta description is empty!";
            }else {
                $description = $web->description;
            }
            
            $keywords = $web->keywords;

            $response = [
                'title' => $title,
                'description' => $description,
                'keywords' => $keywords
            ];
        
        else : 

            $response = [
                'title' => '',
                'description' => '',
                'keywords' => ''
            ];

        endif;

        return rest_ensure_response( $response );

    }

    public function get_search(){
        return 'search results';
    }

    public function get_settings_permission() {
        return true;
    }

    public function save_settings( $req ) {

        return rest_ensure_response( 'success' );
    }

    public function save_search($req){
        $api_key = get_option('serp_setting-name');
        $api_key = !empty( $api_key ) ? $api_key : "D5188F764C2945CF849CB08B877A13D7";
        $keyword = urlencode( isset($req['keyword']) ? $req['keyword'] : 'google' ); 
        $country = isset($req['country']) ? $req['country'] : 'bd';
        $url = "https://api.scaleserp.com/search?api_key=$api_key&q=$keyword&gl=$country";

        $response = json_decode( $this->file_get_contents_curl($url) );

        return rest_ensure_response( $response );
    }

    public function send_mail( $request ){

        $params = $request->get_params();

        $insurance = $request->get_param('insuranceData');
        // $insurance = $request->get_params();

        // return $insurance;
        
        $insuranceCover = isset($insurance["insuranceCover"]) ? $insurance["insuranceCover"] : '';
        
        // return $insuranceCover;
        $countryList = isset($insurance["countryList"]) ? $insurance["countryList"] : array();
        $is_gadget_cover = ($insurance["is_gadget_cover"] == 1) ? 'Yes' : 'No';
        $is_winter_sports_cover = ($insurance["is_winter_sports_cover"] == 1) ? 'Yes' : 'No';
        $is_cruise_cover = ($insurance["is_cruise_cover"] == 1) ? 'Yes' : 'No';
        $is_business_trip_cover = ($insurance["is_business_trip_cover"] == 1) ? 'Yes' : 'No';
        $is_region_united_kingdom = isset($insurance["is_region_united_kingdom"]) ? $insurance["is_region_united_kingdom"] : '';
        $is_region_europe = isset($insurance["is_region_europe"]) ? $insurance["is_region_europe"] : '';
        $is_region_worldwide_excl_USA_canada_caribbean_Mexico = isset($insurance["is_region_worldwide_excl_USA_canada_caribbean_Mexico"]) ? $insurance["is_region_worldwide_excl_USA_canada_caribbean_Mexico"] : '';
        $is_region_worldwide = isset($insurance["is_region_worldwide"]) ? $insurance["is_region_worldwide"] : '';
        
        $dateOftrip = isset($insurance["dateOftrip"]) ? $insurance["dateOftrip"] : '';
        $monthsToCoverIns = isset($insurance["monthsToCoverIns"]) ? $insurance["monthsToCoverIns"] : '';
        $returnDateOftrip = isset($insurance["returnDateOftrip"]) ? $insurance["returnDateOftrip"] : '';
        $monthLengthsTocover = isset($insurance["monthLengthsTocover"]) ? $insurance["monthLengthsTocover"] : '';
        $howWantToInsure = isset($insurance["howWantToInsure"]) ? $insurance["howWantToInsure"] : '';
        $totalTraveller = isset($insurance["totalTraveller"]) ? $insurance["totalTraveller"] : '';
        $maxExcess = isset($insurance["maxExcess"]) ? $insurance["maxExcess"] : '';
        $cancellationCover = isset($insurance["cancellationCover"]) ? $insurance["cancellationCover"] : '';
        $baggageCover = isset($insurance["baggageCover"]) ? $insurance["baggageCover"] : '';
        $medicalCover = isset($insurance["medicalCover"]) ? $insurance["medicalCover"] : '';
        $preMedicalCondition = isset($insurance["preMedicalCondition"]) ? $insurance["preMedicalCondition"] : '';

        $email = isset($insurance["email"]) ? $insurance["email"] : '';
        $firstName = isset($insurance["firstName"]) ? $insurance["firstName"] : '';
        $lastName = isset($insurance["lastName"]) ? $insurance["lastName"] : '';
        $contactWithEmail = ($insurance["contactWithEmail"] == 1) ? 'Yes' : 'No';
        $contactWithPhone = ($insurance["contactWithPhone"] == 1) ? 'Yes' : 'No';
        $contactWithText = ($insurance["contactWithText"] == 1) ? 'Yes' : 'No';
        $contactWithPost = ($insurance["contactWithPost"] == 1) ? 'Yes' : 'No';
        $dontContact = ($insurance["dontContact"] == 1) ? 'True' : 'false';
        $termsAgree = ($insurance["termsAgree"] == 1) ? 'Yes' : 'No';



        $full_message = '<div id="email" style="width:600px;margin: auto;background:white;">
        
        <!-- Header --> 
        <table role="presentation" border="0" width="100%" cellspacing="0">
        <tr>
          <td bgcolor="#00A4BD" align="center" style="color: white;">
            <h1 style="font-size: 22px; margin:20px; font-family:Avenir;"> New Travel Insurance Submission!</h1>
          </tr>
            </td>
        </table>
      
        <!-- Body 1 --> 
        <table role="presentation" border="0" width="100%" cellspacing="0">
           <tr>
             <td style="padding: 30px 30px 30px 60px;">
                <h2>Travel insurance: </h2>
                
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Cover looking for: '.$insuranceCover.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Countries: '.implode(',', $countryList).'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Gadget Covers: '.$is_gadget_cover.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Winter sports cover: '.$is_winter_sports_cover.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Cruise covers: '.$is_cruise_cover.'
                </p>
                
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Business trip covers: '.$is_business_trip_cover.'
                </p>

                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Who to insure: '.$howWantToInsure.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Total Traveller: '.$totalTraveller.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Date Of trip: '.$dateOftrip.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Return Date Of trip: '.$returnDateOftrip.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Month length of cover: '.$monthLengthsTocover.'
                </p>

                <h2>Cover details: </h2>

                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Max Excess: '.$maxExcess.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Cancellation Cover: '.$cancellationCover.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Baggage Cover: '.$baggageCover.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Maximum Medical Cover: '.$medicalCover.'
                </p>

                <h2>Cover needs: </h2>

                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Pre-existing Medical Condition: '.$preMedicalCondition.'
                </p>

                <h2>Account details: </h2>
                
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Email: '.$email.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    First Name: '.$firstName.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Surame: '.$lastName.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Contact With Email: '.$contactWithEmail.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Contact With Phone: '.$contactWithPhone.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Contact With Text: '.$contactWithText.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Contact With Post: '.$contactWithPost.'
                </p>
                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Do not Contact: '.$dontContact.'
                </p>

                <h2>Terms & Conditions: </h2>

                <p style="font-size: 18px; margin:10px 0; font-family:Avenir;">
                    Agreed to terms: '.$termsAgree.'
                </p>

                
               
               </td> 
          </tr>
        </table>
        
        
       <!-- Footer -->
        <table role="presentation" border="0" width="100%" cellspacing="0">
            <tr>
                <td bgcolor="#F5F8FA" style="padding: 30px 30px;">
                  <p style="margin:0 0 12px 0; font-size:16px; line-height:24px; color: #99ACC2; font-family:Avenir"> Travel Insurance </p>
                     
                </td>
                </tr>
            </table> 
      </div>';
        $to = !empty( get_option('travel_setting-name') ) ? get_option('travel_setting-name') : '';
        $subject = "Travel Insurance New Submission";
        $message = $full_message;
        $headers = array('Content-Type: text/html; charset=UTF-8');        ;
        $attachments = null;

        // return $insurance["typeOfAlarm"];
        // return $yourdetails;
        // return $yourpolicy;


        if( wp_mail($to, $subject, $message, $headers, $attachments) ){
            return ["success" => 1];
        }

    }

    public function save_settings_permission() {
        return true;
    }
}
new WP_React_Travel_Rest_Route();