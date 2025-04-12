<?php
// This file is generated. Do not modify it manually.
return array(
	'first-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/first-block',
		'version' => '0.1.0',
		'title' => 'First Block',
		'category' => 'design',
		'description' => 'This is created by sujoy sen',
		'example' => array(
			
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => true,
			'color' => array(
				'gradients' => true,
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		),
		'textdomain' => 'first-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
