package cn.edu.cqupt.ok.utils;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.HttpRequestException;

public class HttpRequest {
	public static String getRequest(String s) throws HttpRequestException {
		try {
			URL url = new URL(s);
			URLConnection connection = url.openConnection();
			InputStream is = connection.getInputStream();
			InputStreamReader isr = new InputStreamReader(is,"utf-8");
			BufferedReader br = new BufferedReader(isr);
			
			String line; 
			StringBuilder builder = new StringBuilder();
			while((line = br.readLine()) != null) {
				builder.append(line);
			}
			
			br.close();
			isr.close();
			is.close();
			
			return builder.toString();
		} catch (Exception e) {
			throw new RuntimeException("访问错误");
		}
	}
	public static String postRequest(String s, JsonObject jsonObject) throws HttpRequestException {
		StringBuilder builder;
		try {
			URL url = new URL(s);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.addRequestProperty("encoding", "utf-8");
			connection.setDoOutput(true);
			connection.setDoInput(true);
			connection.setRequestMethod("POST");
			connection.addRequestProperty("Content-type", "application/json");
			
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(connection.getOutputStream(), "utf-8"));

			bw.write(jsonObject.toString());
			bw.flush();

			BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
			
			String line;
			builder = new StringBuilder();
			while((line = br.readLine()) != null) {
				builder.append(line);
			}
			
			bw.close();
			br.close();
			
			return builder.toString();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public static String httpClientGetrequest(String s) throws HttpRequestException {
		HttpClient client = HttpClients.createDefault();
		HttpGet get = new HttpGet(s);
		try {
			HttpResponse response = client.execute(get);
			HttpEntity entity = response.getEntity();
			return EntityUtils.toString(entity);
		} catch (Exception e) {
			throw new RuntimeException("访问错误");
		} 
	}
	
	public static String httpClientPostRequest(String s, HashMap<String,String> hashmap) throws HttpRequestException {
		HttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(s);
		try {
			List<BasicNameValuePair> parameters = new ArrayList<>();
			for (Entry<String, String> entry : hashmap.entrySet()) {
				parameters.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
			}
			post.setEntity(new UrlEncodedFormEntity(parameters, "utf-8"));
			HttpResponse response = client.execute(post);
			HttpEntity entity = response.getEntity();
			return EntityUtils.toString(entity);
		} catch (Exception e) {
			throw new RuntimeException("访问错误");
		} 
	}
}
