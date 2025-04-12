import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, TextControl, ToolbarButton, ToolbarGroup, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="edit"
                        title={__('Edit', 'text-domain')}
                        onClick={() => console.log("Edit Clicked")}
                    />
                    <ToolbarButton
                        icon="trash"
                        title={__('Delete', 'text-domain')}
                        onClick={() => console.log("Delete Clicked")}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="admin-plugins"
                        title={__('Plugins', 'text-domain')}
                        onClick={() => console.log("Plugins Clicked")}
                    />
                    <ToolbarButton
                        icon="admin-tools"
                        title={__('Tools', 'text-domain')}
                        onClick={() => console.log("Tools Clicked")}
                    />
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody
                    title={__('Block Settings', 'text-domain')}
                    initialOpen={true}
                    icon="admin-settings"
                >
                    <TextControl
                        label={__('Enter Something', 'text-domain')}
                        onChange={(v) => console.log(v)}
                    />
                </PanelBody>
            </InspectorControls>

            <InspectorControls group="styles">
                <PanelBody
                    title={__('Block Styles', 'text-domain')}
                    initialOpen={true}
                    icon="admin-generic"
                >
                    <ColorPalette
                        onChange={(v) => console.log(v)}
                    />
                </PanelBody>
            </InspectorControls>

            <InspectorControls group="advanced">
                <PanelBody
                    title={__('Advanced Settings', 'text-domain')}
                    initialOpen={true}
                    icon="admin-tools"
                >
                    <ToggleControl
                        label={__('Something Visible', 'text-domain')}
                        onChange={() => console.log("Something Visible")}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                Editor Part
            </div>
        </>
    );
}
