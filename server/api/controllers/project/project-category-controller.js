
/**
 * @class ProjectCategoryController
 * @extends {BaseController}
 * 
 * @description
 *    API Controller for Project Category
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */
class ProjectCategoryController extends BaseController {
  constructor () {

  }

  /**
   * @name add
   * @memberof ProjectCategoryController
   * 
   * @description
   *  new project category is created for given data
   * 
   * @param {*} projectCategoryObj json-object; model - 'Project Category'
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async add(projectCategoryObj) {

  }

  /**
   * @name update
   * @memberof ProjectCategoryController
   * 
   * @description
   *  update the existing project category with given categoryId for given data
   * 
   * @param {*} categoryId
   * @param {*} projectCategoryObj json-object; model - 'Project Category'
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async update(categoryId, projectCategoryObj) {

  }

  /**
   * @name patch
   * @memberof ProjectCategoryController
   * 
   * @description
   *  update only one attribute i.e. patch the project category object
   * 
   * @param {*} categoryId
   * @param {*} attributeNameValuePair
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async patch(categoryId, attributeNameValuePair) {

  }

  /**
   * @name delete
   * @memberof ProjectCategoryController
   * 
   * @description
   *  - This checks if Project Category with given categoryId 
   *        EXISTS then deactivate i.e  DO NOT DELETE from DB TABLE but MARK as INACTIVE 
   *            i.e can't be used any longer for any project but visible at various places
   *        NOT EXISTS then mark it deleted, i.e  DO NOT DELETE from DB TABLE 
   *            but also it is no where visible in app
   * 
   * @param {*} categoryId
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async delete(categoryId) {

  }

  /**
   * @name list
   * @memberof ProjectCategoryController
   * 
   * @description
   *  - This checks if categoryId is given or not (as default value is ZERO)
   *        if ZERO, then list all Project Category - brief metadata
   *        if NOT ZERO, then list only Project Category - brief metadata for given CategoryId
   * 
   * @param {*} categoryId
   * 
   * @returns
   *    brief metadata (not all data) like
   *    JSON array of object { categoryId, categoryName, etc.. } @todo
   *
   */
  async list(categoryId = 0) {

  }

  /**
   * @name detail
   * @memberof ProjectCategoryController
   * 
   * @description
   *  - This checks if categoryId is given or not (as default value is ZERO)
   *        if ZERO, then array all Project Category - all data/details
   *        if NOT ZERO, then Project Category - all data/detail for given CategoryId
   * 
   * @param {*} categoryId
   * 
   * @returns
   *    all data/detail
   *    JSON array of object { categoryId, categoryName, etc.. } @todo
   *
   */
  async detail(categoryId = 0) {

  }

  /**
   * @name invalidateCache
   * @memberof ProjectCategoryController
   * 
   * @description
   *    this method is used to update the cache for Project Controller data and it is being invoked 
   *    by other member functions based on their operations
   *
   * @param {*} categoryId
   * @param {*} data
   * 
   * @returns
   *    Success - if cache updated successfully 
   *    Failure - if cache is failed to update for given dataset
   * 
   */
  async invalidateCache(categoryId, data) {

  }

  /**
   * @name updateTracker
   * @memberof ProjectCategoryController
   * 
   * @description
   *    this method is used to track the changes made by user for audit purposes &
   *    better tracking, view in history as applicable and etc
   *
   * @param {*} categoryId
   * @param {*} data
   * 
   * @returns
   *    Success - if tracker updated successfully 
   *    Failure - if tracker is failed to update for given dataset
   * 
   */
  async updateTracker(categoryId, data) {

  }

}