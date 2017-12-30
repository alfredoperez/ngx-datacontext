import { DataContext } from './datacontext.service';
import { FirebaseRepository } from './firebase-repository.service';
import { DataServiceFactory } from './repository-factory.service';
import { RestApiRepositoryService } from './rest-api-repository.service';

export const services = [
  DataContext,
  DataServiceFactory,
  FirebaseRepository,
  RestApiRepositoryService
];

export * from './datacontext.service';
export * from './firebase-repository.service';
export * from './firestore-repository.service';
export * from './repository-factory.service';
export * from './rest-api-repository.service';
