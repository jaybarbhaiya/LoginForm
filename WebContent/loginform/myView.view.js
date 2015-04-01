sap.ui.jsview("loginform.myView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf loginform.myView
	*/ 
	getControllerName : function() {
		return "loginform.myView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf loginform.myView
	*/ 
	createContent : function(oController) {
		jQuery.sap.require("sap.ui.layout.GridData");
		    
		    
		var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout({
			      labelSpanL: 2,
			      labelSpanM: 12,
			      labelSpanS: 12,
			      emptySpanL: 1,
			      emptySpanM: 1,
			      emptySpanS: 1,
			      columnsL: 1,
			      columnsM: 1,
			      breakpointL: 800,
			      breakpointM: 400
			      });  
		
 		return new sap.m.Page({
			title: "Tutorial",
			content: [
				new sap.ui.layout.form.Form('loginForm', {
					title: "Please login",
					layout: oLayout2,
					formContainers:[
					    new sap.ui.layout.form.FormContainer({
					    	formElements: [ 
						      new sap.ui.layout.form.FormElement({
						         label: "Username",
						         fields: [new sap.m.Input("username",{
						     		      layoutData: new sap.ui.layout.GridData({span: "L2 M9 S9"})
						 		    })]
						}),
						new sap.ui.layout.form.FormElement({
					         label: "Passowrd",
					         fields: [new sap.m.Input("password",{
					        	 		  type: sap.m.InputType.Password,
						     		      layoutData: new sap.ui.layout.GridData({span: "L2 M9 S9"})
						 		    })]
					         
						}),
						new sap.ui.layout.form.FormElement({
							label: "",
							fields: [new sap.m.Button({
								text: "Login",
								press: function() {
									oController.doLogin();
								},
								layoutData: new sap.ui.layout.GridData({span: "L2 M9 S9"})
							})]
						})
					   ]
					})
				]
				})  
			]
		});
	}
	
});