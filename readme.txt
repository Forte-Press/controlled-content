=== Controlled Content Block ===
Contributors:      wpblockbuddy
Tags:              block, blocks, design, layout
Requires at least: 5.8
Tested up to:      6.0
Requires PHP:      5.6
Stable tag:        0.2.1
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A block to set allowed inner blocks.

== Description ==

With the Controlled Content Block you can create a Content section where you have control over which blocks are allowed. Use this block if you have a section where you only want paragraphs. The block also features a filter to control who can change which type of blocks are available. The possible allowed core blocks are paragraphs, lists, headings, and images. If you would like to add or remove blocks from these choices there is a filter for that too.

The block also features a filter to remove the meta box for selecting allowed blocks for certain users.

[View Information on filters and additional documentation.](https://wpblockbuddy.com/blocks/controlled-content-block/)

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/controlled-content` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Screenshots == 

== Frequently Asked Questions ==

= Which blocks can be allowed? =

Any block installed on your site. The default list you can select from is:

* Paragraph
* List
* Heading
* Image

= What Filters are available? =

The block offers two filters.

1. `wpblockbuddy_controlled_content_block_choices` to filter the list of blocks to choose from.
2. `wpblockbuddy_controlled_content_user_can_view` to filter if the meta box for selecting allowed blocks is visible to a user.

== Screenshots ==

1. Select allowed blocks.
2. Only allowed blocks in block editor 

== Changelog ==

= 0.1.0 =
* Release

= 0.2.0 =
* Add option for custom placeholder text for the block
* Add link to documentation from the plugin action links
