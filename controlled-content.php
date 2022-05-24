<?php
/**
 * Plugin Name:       Controlled Content Block by wpBlockBuddy
 * Description:       A block that restricts the allowed block types for a content section.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            wpblockbuddy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       controlled-content
 *
 * @package           wpblockbuddy
 */

add_action( 'init', 'wpblockbuddy_controlled_content_block_init' );
function wpblockbuddy_controlled_content_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action('enqueue_block_editor_assets', 'wpblockbuddy_controlledContentVar');
function wpblockbuddy_controlledContentVar () {
	$blockChoices = [
		'paragraph' => 'core/paragraph',
		'heading' 	=> "core/heading",
		'image' 	=> "core/image",
		'list' 		=> "core/list",
	];
	$args = [
		'userCanView' => apply_filters('wpblockbuddy_controlled_content_user_can_view', true),
		'blockChoices' => apply_filters('wpblockbuddy_controlled_content_block_choices', $blockChoices)
	];
	wp_localize_script('wpblockbuddy-controlled-content-editor-script', 'wpBlockBuddyControlledContent', $args);
}