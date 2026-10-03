import { IsString, IsNumber, IsOptional, IsArray, IsBoolean, Min } from 'class-validator';

// DTO placeholders for NestJS Products module
// TODO: Implement when backend phase begins

export class CreateProductDto {
  @IsString()
  slug: string;

  @IsString()
  nameKm: string;

  @IsString()
  nameEn: string;

  @IsString()
  descriptionKm: string;

  @IsString()
  descriptionEn: string;

  @IsString()
  brand: string;

  @IsString()
  category: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsNumber()
  discountPrice?: number;

  @IsString()
  image: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsArray()
  @IsString({ each: true })
  skinTypes: string[];

  @IsArray()
  @IsString({ each: true })
  concerns: string[];

  @IsOptional()
  @IsBoolean()
  bestSeller?: boolean;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  newArrival?: boolean;
}

export class UpdateProductDto extends CreateProductDto {}

export class ProductQueryDto {
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  skinType?: string;

  @IsOptional()
  @IsString()
  concern?: string;

  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @IsNumber()
  maxPrice?: number;

  @IsOptional()
  @IsString()
  sort?: 'price_asc' | 'price_desc' | 'rating' | 'newest';

  @IsOptional()
  @IsString()
  search?: string;
}
