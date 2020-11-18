<?php
/*
Plugin Name: Tc Font Utils
Plugin URI: http://www.tcarisland.no
Description: A set of utilities for previewing fonts in WordPress
Author: Thor Christopher Arisland
Author URI: http://www.tcarisland.no
License: Free for personal use
*/

add_action('admin_menu', 'tc_fonts_plugin_setup_menu');
add_action('admin_notices', 'tc_plugin_admin_notice' );
add_action('admin_enqueue_scripts', 'tc_load_react_app' );
register_activation_hook( __FILE__, 'tc_fonts_plugin_activation' );

function tc_fonts_plugin_setup_menu() {
    $page_title = 'Fonts';
    $menu_title = $page_title;
    $capability = 'manage_options';
    $menu_slug  = 'tc-font-utils';
    $menu_page_callback = 'tc_fonts_render_menu_page';
    add_menu_page($page_title, $menu_title, $capability, $menu_slug, $menu_page_callback);   
}

function tc_fonts_render_menu_page() {
    include "fonts-admin-menu.php";
}

function tc_plugin_admin_notice(){
    $result = get_transient($tcFontPluginNoticeName);
    if( strlen($result) > 0 ){
        ?>
        <div class="updated notice is-dismissible">
            <p>TC Font Utils plugin message: </p>
            <?php echo $result ?>
        </div>
        <?php
        delete_transient($tcFontPluginNoticeName);
    }
}

function tc_fonts_plugin_activation() {
    set_transient( 'tc-font-utils-notice', 'activation hook initiated', 5);
}

function tc_load_react_app($hook) {
	$is_main_dashboard = $hook === 'toplevel_page_tc-font-utils';
	if(!$is_main_dashboard) {
		return;
	}
	$react_app_build = plugin_dir_url( __FILE__ );
	$manifest_url = $react_app_build . 'asset-manifest.json';
	
	$request = file_get_contents($manifest_url);
	if(!$request) {
		return false;
	}
	$files_data = json_decode($request);
	if($files_data === null) {
		return;
	}
	if(!property_exists($files_data, 'entrypoints')) {
		return false;
	}
    $assets_files = $files_data->entrypoints;
    $js_files = array_filter($assets_files, 'tc_filter_js_files');
    $css_files = array_filter($assets_files, 'tc_filter_css_files');

    foreach($css_files as $index => $css_file) {
        wp_enqueue_style( 'font-utils-' . $index, $react_app_build . $css_file );
    }
    foreach($js_files as $index => $js_file) {
        wp_enqueue_script('font-utils-' . $index, $react_app_build . $js_file, array(), 1, true);
	}
	wp_localize_script( 'font-utils-0', 'tcReactPlugin', array('appSelector' => '#tc-font-utils-wrapper'));
}

function tc_filter_js_files($file_string) {
    return pathinfo($file_string, PATHINFO_EXTENSION) === 'js';
}

function tc_filter_css_files($file_string) {
    return pathinfo($file_string, PATHINFO_EXTENSION) === 'css';
}

?>