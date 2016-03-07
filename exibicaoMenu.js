var ControleMenu = (
	function(){
		
		var MenuCarros = document.getElementById("subMenu_Carros");
		
		return{
			HabilitarSubMenuCarro: function(){
				this.DesabilitarSubMenus();
				document.getElementById("subMenu_Carros").style.display = "block";
			}
			,
			HabilitarSubMenuTeste: function(){
				this.DesabilitarSubMenus();
				document.getElementById("subMenu_Testes").style.display = "block";
			}
			,
			DesabilitarSubMenus: function(){
				document.getElementById("subMenu_Testes").style.display = "none";
				document.getElementById("subMenu_Carros").style.display = "none";
			}
		};
	}
)();