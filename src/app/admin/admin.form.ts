import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NonUndefined } from 'utility-types';

type AdminForm = { name: string, houseNumber: number | null, aptNumber?: number };

type AllowedRecordKeyType = string | number | symbol;

type TypeToFormGroup1<T> = {
  [K in keyof T]: FormControl<T[K]>
}

type TypeToFormGroup2<T> = {
  [K in keyof T]: T[K] extends Array<infer R> ?
                  FormArray<
                    R extends Record<AllowedRecordKeyType, unknown>
                    ? FormGroup<TypeToFormGroup2<R>>
                    : FormControl<R>
                  > : T[K] extends Record<AllowedRecordKeyType, unknown>
                      ? FormGroup<TypeToFormGroup2<T[K]>>
                      : FormControl<T[K]>;
};

type PickOptionalProps<T> = {
  [K in keyof T as undefined extends T[K] ? K : never]: T[K];
};

type PickNotOptionalProps<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};

type OptionalToNullableProps<T> = {
  [K in keyof PickOptionalProps<T>]-?: NonUndefined<T[K] | null>
} & {
  [K in keyof PickNotOptionalProps<T>]: T[K]
};

type NullableProps<T> = { [K in keyof T]: T[K] | null };

// works fine with TypeToFormGroup1<...> helper type
type AdminFormGroupDefinition = TypeToFormGroup2<NullableProps<OptionalToNullableProps<AdminForm>>>;

export function createForm(): FormGroup<AdminFormGroupDefinition> {

  const result = new FormGroup<AdminFormGroupDefinition>({
                                                           name: new FormControl<string>('', { nonNullable: true }),
                                                           houseNumber: new FormControl<number | null>(null),
                                                           aptNumber: new FormControl<number | null>(null),
                                                         });

  return result;
}
