package com.backend.main.singletons;

import com.backend.main.entities.Patient;
import com.backend.main.entities.Result;
import org.datavec.image.data.Image;
import org.datavec.image.loader.ImageLoader;
import org.deeplearning4j.nn.modelimport.keras.KerasModelImport;
import org.deeplearning4j.nn.modelimport.keras.exceptions.InvalidKerasConfigurationException;
import org.deeplearning4j.nn.modelimport.keras.exceptions.UnsupportedKerasConfigurationException;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

public class ResultSingleton {

    static MultiLayerNetwork resource;
    static ImageLoader imageLoader = new ImageLoader(250, 250, 3);

    static {
        try {
            resource = KerasModelImport.importKerasSequentialModelAndWeights("model.h5");
        } catch (IOException | InvalidKerasConfigurationException | UnsupportedKerasConfigurationException e) {
            e.printStackTrace();
        }
    }

    //prevent instantiation
    private ResultSingleton() {
    }

    public static Result getResult(MultipartFile imageFile, Patient patient) throws IOException {
        Image image = imageLoader.asImageMatrix(imageFile.getInputStream());
        var v = resource.output(image.getImage().permute(0, 2, 3, 1));
        int category = v.getInt(0);
        System.out.println("category: " + category);
        System.out.println(v);
        return new Result(category, patient);
    }

    public static Result getResult(String url, Patient patient) throws IOException {
        Image image = imageLoader.asImageMatrix(new URL(url).openStream());
        return getResult(image, patient);
    }

    private static Result getResult(Image image, Patient patient) {
        var v = resource.output(image.getImage().permute(0, 2, 3, 1));
        int category = v.getInt(0);
        return new Result(category, patient);
    }
}
