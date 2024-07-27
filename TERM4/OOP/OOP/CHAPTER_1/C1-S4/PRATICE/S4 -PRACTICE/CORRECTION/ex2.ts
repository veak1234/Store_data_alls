/*
 INSTRUCTIONS

	Note : read extra explanation of PDF 
	
	We want to model   Menu and   MenuItem

  - An Menu has:
			- the menu label (string)
			- the list of menu items (array of MenuItem)


  - An MenuItem has:
			- the menu item label (string)
			- the menu icon (string)

	Q1 : Create the 2 types.

	Q2 : Create the following menus :
				menu File
						label : "File"
						items : 
							name: "Save ...", callBack: "onClickSave" 
							name: "Open...", callBack: "onClickOpen" 
							name: "Preferences", callBack: "onClickPreferences" 
   
   				menu Edition
						label : "Edition"
						items : 
							name: "Copy", callBack: "onCopy" 
							name: "Paste", callBack: "onPaste" 
*/ 
// Q1: create 2 types:
type MenuItem = {
	label: string,
	icon: string
}

type Menu = {
	label: string,
	menuItem: MenuItem[]
}