// @flow

import { AbstractExtension } from './abstract'
import type { Type } from '../type'

/**
 * Represents a creative extension.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class CreativeExtension extends AbstractExtension {
  get $type (): Type {
    return 'CreativeExtension'
  }
}
