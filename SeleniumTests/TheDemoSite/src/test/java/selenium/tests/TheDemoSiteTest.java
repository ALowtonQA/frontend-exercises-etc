package selenium.tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import selenium.pages.Login;
import selenium.pages.NewUser;
import selenium.pages.Home;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import java.util.concurrent.TimeUnit;

public class TheDemoSiteTest {
	
	public static final String DOMAIN = "http://thedemosite.co.uk";
	
	private WebDriver driver; 
	
	@Before
	public void init() {
		System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(true); // Turns off when finished testing
		
		driver = new ChromeDriver(options);
		driver.manage().window().setSize(new Dimension(1366, 768));
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}
	
	@Test
	public void testUserPage() {
		driver.get(DOMAIN + "/index.php");
		
		Home homePage = PageFactory.initElements(driver, Home.class);
		
		homePage.getUserLink().click();
		
		assertEquals("Add a user - FREE PHP code and SQL", driver.getTitle());
	}
	
	@Test
	public void testAddUser() {
		driver.get(DOMAIN + "/addauser.php");
		
		NewUser userPage = PageFactory.initElements(driver, NewUser.class);
		
		userPage.createUser("user", "pass");
		
		assertEquals(DOMAIN+"/savedata.php", driver.getCurrentUrl());
	}
	
	@Test
	public void testLoginUser() {
		driver.get(DOMAIN + "/index.php");
		
		Home homePage = PageFactory.initElements(driver, Home.class);
		Login loginPage = PageFactory.initElements(driver, Login.class);
		NewUser userPage = PageFactory.initElements(driver, NewUser.class);
		String username = "user";
		String password = "pass";
		
		homePage.getUserLink().click();
		userPage.createUser(username, password);
		homePage.getLoginLink().click();
		loginPage.loginInfo(username, password);
		
		assertTrue(driver.getPageSource().contains("**Successful Login**"));
	}
	
	@After
	public void shutdown() {
		driver.close();
	}
}
