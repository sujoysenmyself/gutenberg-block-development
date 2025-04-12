import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {
	ColorPalette,
	PanelBody,
	TextControl,
	ToolbarButton,
	ToolbarGroup,
	ToggleControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content, textValue, textColor, isVisible } = attributes;

	const blockProps = useBlockProps({
		style: {
			color: textColor,
		},
	});

	console.log(attributes);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						label={__("Edit", "text-domain")}
						onClick={() => console.log("Edit Clicked")}
					/>
					<ToolbarButton
						icon="trash"
						label={__("Delete", "text-domain")}
						onClick={() => console.log("Delete Clicked")}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon="admin-plugins"
						label={__("Plugins", "text-domain")}
						onClick={() => console.log("Plugins Clicked")}
					/>
					<ToolbarButton
						icon="admin-tools"
						label={__("Tools", "text-domain")}
						onClick={() => console.log("Tools Clicked")}
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody
					title={__("Block Settings", "text-domain")}
					initialOpen={true}
				>
					<TextControl
						label={__("Enter Something", "text-domain")}
						value={textValue}
						onChange={(v) => setAttributes({ textValue: v })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Block Styles", "text-domain")}
					initialOpen={false}
				>
					<ColorPalette
						value={textColor}
						onChange={(v) => setAttributes({ textColor: v })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Advanced Settings", "text-domain")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Something Visible", "text-domain")}
						checked={isVisible}
						onChange={(v) => setAttributes({ isVisible: v })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<RichText
					tagName="p"
					value={content}
					onChange={(v) => setAttributes({ content: v })}
					placeholder={__("Enter something here...", "text-domain")}
				/>
			</div>
		</>
	);
}
