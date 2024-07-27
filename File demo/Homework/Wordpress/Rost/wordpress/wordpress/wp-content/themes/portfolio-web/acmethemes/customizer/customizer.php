<?php
/**
 * Portfolio Web Theme Customizer.
 *
 * @package Acme Themes
 * @subpackage Portfolio Web
 */

/*
* file for upgrade to pro
*/
require portfolio_web_file_directory('acmethemes/customizer/customizer-pro/class-customize.php');

/*
* file for customizer core functions
*/
require portfolio_web_file_directory('acmethemes/customizer/customizer-core.php');

/*
* file for customizer sanitization functions
*/
require portfolio_web_file_directory('acmethemes/customizer/sanitize-functions.php');

/**
 * Adding different options
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function portfolio_web_customize_register( $wp_customize ) {

    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';

    /*saved options*/
    $options  = portfolio_web_get_theme_options();

    /*defaults options*/
    $defaults = portfolio_web_get_default_theme_options();

    /*custom controls*/
    require portfolio_web_file_directory('acmethemes/customizer/custom-controls.php');
	require portfolio_web_file_directory('acmethemes/customizer/customizer-repeater/customizer-control-repeater.php');

    /*
     * file for feature panel of home page
     */
    require portfolio_web_file_directory('acmethemes/customizer/feature-section/feature-panel.php');

    /*
    * file for header panel
    */
    require portfolio_web_file_directory('acmethemes/customizer/header-options/header-panel.php');

    /*
    * file for customizer footer section
    */
    require portfolio_web_file_directory('acmethemes/customizer/footer-options/footer-panel.php');

    /*
    * file for design/layout panel
    */
    require portfolio_web_file_directory('acmethemes/customizer/design-options/design-panel.php');

	/*
   * file for single panel
   */
	require portfolio_web_file_directory('acmethemes/customizer/single-posts/single-post-panel.php');

    /*
     * file for options panel
     */
    require portfolio_web_file_directory('acmethemes/customizer/options/options-panel.php');

	/*woocommerce options*/
	if ( portfolio_web_is_woocommerce_active() ) :
		require_once portfolio_web_file_directory('acmethemes/customizer/wc-options/wc-panel.php');
	endif;

    /*sorting core and widget for ease of theme use*/
    $wp_customize->get_section( 'static_front_page' )->priority = 10;
    
    $portfolio_web_home_section = $wp_customize->get_section( 'sidebar-widgets-portfolio-web-home' );
    if ( ! empty( $portfolio_web_home_section ) ) {
        $portfolio_web_home_section->panel         = '';
        $portfolio_web_home_section->title         = esc_html__( 'Home Main Content Area ', 'portfolio-web' );
        $portfolio_web_home_section->priority      = 80;
    }
    /*customizing default colors section and adding new controls-setting too*/
    $wp_customize->get_section( 'colors' )->panel = 'portfolio-web-design-panel';
    $wp_customize->get_section( 'colors' )->title = esc_html__( 'Basic Color', 'portfolio-web' );
    $wp_customize->get_section( 'background_image' )->priority = 100;

    /*customizing default colors section and adding new controls-setting too*/
    $wp_customize->get_section( 'background_image' )->panel = 'portfolio-web-design-panel';
    $wp_customize->get_section( 'background_image' )->priority = 60;


    /*adding header image inside this panel*/
    $wp_customize->get_section( 'header_image' )->panel = 'portfolio-web-header-panel';
    $wp_customize->get_section( 'header_image' )->description = esc_html__( 'Applied to header image of inner pages.', 'portfolio-web' );

    /*TODO 5.8*/
   /* $portfolio_web_popup_widget_area = $wp_customize->get_section( 'sidebar-widgets-popup-widget-area' );
    if ( ! empty( $portfolio_web_popup_widget_area ) ) {
        $portfolio_web_popup_widget_area->panel = 'portfolio-web-header-panel';
        $portfolio_web_popup_widget_area->title = esc_html__( 'Popup Widgets', 'portfolio-web' );
        $portfolio_web_popup_widget_area->priority = 80;

        $portfolio_web_popup_widget_title = $wp_customize->get_control( 'portfolio_web_theme_options[portfolio-web-popup-widget-title]' );
        if ( ! empty( $portfolio_web_popup_widget_title ) ) {
            $portfolio_web_popup_widget_title->section  = 'sidebar-widgets-popup-widget-area';
            $portfolio_web_popup_widget_title->priority = -1;
        }
    }*/

}
add_action( 'customize_register', 'portfolio_web_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function portfolio_web_customize_preview_js() {
    wp_enqueue_script( 'portfolio-web-customizer', get_template_directory_uri() . '/acmethemes/core/js/customizer.js', array( 'customize-preview' ), '1.0.0', true );
}
add_action( 'customize_preview_init', 'portfolio_web_customize_preview_js' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function portfolio_web_customize_controls_scripts() {
    wp_enqueue_script( 'portfolio-web-customizer-controls', get_template_directory_uri() . '/acmethemes/core/js/customizer-controls.js', array( 'customize-preview' ), '1.0.0', true );
}
add_action( 'customize_controls_enqueue_scripts', 'portfolio_web_customize_controls_scripts' );