package selenium.tests;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import selenium.pages.ShoppingPage;

public class ShoppingTest {

	private WebDriver driver;
	
	@Before
	public void init() {
		System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(true); // Set to true when finished testing
		driver = new ChromeDriver(options);
		driver.manage().window().setSize(new Dimension(1366, 768));
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
	}
	
	@Test
	public void test() {	
		driver.get("http://automationpractice.com/index.php");
		ShoppingPage page = PageFactory.initElements(driver, ShoppingPage.class);
		page.gettShirtsLink().click();
		page.gettShirtEntry().click();
		String name = "Faded Short Sleeve T-shirts";
		page.getCartbutton().click();
		page.getProceedButton().click();
		assertTrue((page.gettShirtEntry().getText().contains(name)));
	}
	
	@After
	public void tearDown() {
		driver.close();
	}
}
