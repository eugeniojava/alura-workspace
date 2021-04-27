package com.eugeniojava.mudi.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Order {

    private String productName;
    private BigDecimal negotiatedValue;
    private LocalDate deliveryDate;
    private String productUrl;
    private String imageUrl;
    private String productDescription;

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getNegotiatedValue() {
        return negotiatedValue;
    }

    public void setNegotiatedValue(BigDecimal negotiatedValue) {
        this.negotiatedValue = negotiatedValue;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getProductUrl() {
        return productUrl;
    }

    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
}
