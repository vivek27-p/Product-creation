package com.pvk.product_crud.repository;

import com.pvk.product_crud.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
