import { ILintNamingUseCase } from '../../domain/usecases/ILintNamingUseCase';
import { INamingLinter } from '../../domain/applications/INamingLinter';
import { LayerName } from '../../domain/Entities';
import { ISketchRepository } from '../repositories/ISketchRepository';
import { ISketchPresenter } from '../presenters/SketchPresenter';
import { SketchLayerType } from '../entities/Entities';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';

@injectable()
export class LintNamingUseCase implements ILintNamingUseCase {
  private repository: ISketchRepository;
  private presenter: ISketchPresenter;
  private linter: INamingLinter;

  constructor(
    @inject(TYPES.ISketchRepository) repository: ISketchRepository,
    @inject(TYPES.ISketchPresenter) presenter: ISketchPresenter,
    @inject(TYPES.INamingLinter) linter: INamingLinter,
  ) {
    this.repository = repository;
    this.presenter = presenter;
    this.linter = linter;
  }

  async handle(inputPath: string): Promise<LayerName[]> {
    const nodes = await this.repository.getAll(inputPath);
    const layers = this.presenter.translate(nodes);
    this.linter.lint(layers, SketchLayerType.Artboard);
    return layers;
  }
}
