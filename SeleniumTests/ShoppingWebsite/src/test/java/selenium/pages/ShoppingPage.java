package selenium.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShoppingPage {

	//every page new class
	
	@FindBy(linkText = "T-SHIRTS")
	private WebElement tShirtsLink;
	
	@FindBy(partialLinkText = "Faded Short Sleeve T-shirts")
	private WebElement tShirtEntry;
	
	@FindBy(name = "Submit")
	private WebElement cartbutton;
	
	@FindBy(className = "button-medium")
	private WebElement proceedButton;

	public WebElement gettShirtsLink() {
		return tShirtsLink;
	}

	public WebElement gettShirtEntry() {
		return tShirtEntry;
	}

	public WebElement getCartbutton() {
		return cartbutton;
	}

	public WebElement getProceedButton() {
		return proceedButton;
	}
}
