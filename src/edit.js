import { __ } from "@wordpress/i18n";
import { useSelect, select } from "@wordpress/data";
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import {
	PanelBody,
	FormTokenField,
	TextControl,
	PanelRow,
} from "@wordpress/components";
import { shuffle, getKeyByValue } from "./helpers";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { allowedBlocks, instructions } = attributes;
	const blockChoicesDefaults = {
		paragraph: "core/paragraph",
		heading: "core/heading",
		image: "core/image",
		list: "core/list",
	};
	const blockChoices = wpBlockBuddyControlledContent.hasOwnProperty(
		"blockChoices"
	)
		? wpBlockBuddyControlledContent.blockChoices
		: blockChoicesDefaults;

	const blockNames = Object.keys(blockChoices);

	const isParentOfSelectedBlock =
		useSelect((select) =>
			select("core/block-editor").hasSelectedInnerBlock(clientId, true)
		) || isSelected;
	const thisBlock = useSelect((select) =>
		select("core/block-editor").getBlock(clientId)
	);

	const showInstructions = thisBlock.innerBlocks.length === 0;

	const userCanView = wpBlockBuddyControlledContent.userCanView;
	const handleTokensNamestoSlugs = (tokens) => {
		const newBlocks = tokens.map((token) => {
			return blockChoices[token];
		});
		setAttributes({ allowedBlocks: newBlocks });
	};

	const namedAllowedBlocks = (allowedBlocks) => {
		return allowedBlocks.map((token) => {
			return getKeyByValue(blockChoices, token);
		});
	};
	const blocksValue = namedAllowedBlocks(allowedBlocks);

	return (
		<>
			{userCanView && (
				<InspectorControls>
					<PanelBody
						title={__("Allowed Blocks", "wpblockbuddy")}
						initialOpen={true}
					>
						<PanelRow>
							<p>
								{__(
									"Restrict the content area to the following blocks:",
									"wpblockbuddy"
								)}
							</p>
						</PanelRow>
						<FormTokenField
							value={blocksValue}
							suggestions={blockNames}
							onChange={handleTokensNamestoSlugs}
						/>
						<TextControl
							label={__("Placeholder", "wpblockbuddy")}
							help={__("Use to provide instruction on the purpose of this section", "wpblockbuddy")}
							value={instructions}
							onChange={(value) => setAttributes({ instructions: value })}
						/>
					</PanelBody>
				</InspectorControls>
			)}

			<div {...useBlockProps()}>
				{showInstructions && <p className="instructions">{instructions}</p>}

				<InnerBlocks
					allowedBlocks={shuffle(allowedBlocks)}
					renderAppender={
						isParentOfSelectedBlock ? InnerBlocks.ButtonBlockAppender : false
					}
					templateLock={false}
				/>
			</div>
		</>
	);
}
