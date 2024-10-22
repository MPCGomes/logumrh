package com.logumrh.repository.common;

import com.logumrh.model.common.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
